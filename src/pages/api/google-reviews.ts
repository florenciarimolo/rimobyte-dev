import type { APIRoute } from "astro";

// Do not prerender, this should run on-demand as a serverless function
export const prerender = false;

const GOOGLE_PLACES_API_KEY = import.meta.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACES_PLACE_ID = import.meta.env.GOOGLE_PLACES_PLACE_ID;

type GooglePlacesReview = {
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  rating?: number;
  text?: {
    text?: string;
    languageCode?: string;
  };
  relativePublishTimeDescription?: string;
  publishTime?: string;
};

type GooglePlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GooglePlacesReview[];
};

export const GET: APIRoute = async ({ request }) => {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACES_PLACE_ID) {
    return new Response(
      JSON.stringify({
        error: "Google Places API key or Place ID is not configured on the server",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const incomingUrl = new URL(request.url);
  const langParam = incomingUrl.searchParams.get("lang");
  const languageCode =
    langParam === "en" || langParam === "es" ? langParam : undefined;

  const url = new URL(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(
      GOOGLE_PLACES_PLACE_ID,
    )}`,
  );

  // Request only the fields we actually need, to reduce cost and payload size.
  // In Places API v1, reviews are requested via the aggregate "reviews" field.
  url.searchParams.set(
    "fields",
    ["rating", "userRatingCount", "googleMapsUri", "reviews"].join(","),
  );
  url.searchParams.set("key", GOOGLE_PLACES_API_KEY);

  if (languageCode) {
    url.searchParams.set("languageCode", languageCode);
  }

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");

      return new Response(
        JSON.stringify({
          error: "Failed to fetch Google reviews",
          status: response.status,
          details:
            import.meta.env.MODE === "development" ? errorBody : undefined,
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const data = (await response.json()) as GooglePlacesResponse;

    // Normalize and limit the number of reviews we send to the client
    const normalizedReviews =
      data.reviews
        ?.filter((review) => Boolean(review.text?.text && review.rating))
        .slice(0, 5)
        .map((review) => ({
          authorName:
            review.authorAttribution?.displayName ?? "Usuario de Google",
          rating: review.rating ?? 0,
          text: review.text?.text ?? "",
          publishedRelative: review.relativePublishTimeDescription,
          publishTime: review.publishTime,
        })) ?? [];

    const payload = {
      rating: data.rating ?? null,
      userRatingCount: data.userRatingCount ?? null,
      googleMapsUrl: data.googleMapsUri ?? null,
      reviews: normalizedReviews,
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error: any) {
    if (import.meta.env.MODE === "development") {
      console.error("Error calling Google Places API:", error);
    }

    return new Response(
      JSON.stringify({
        error: "Unexpected error while fetching Google reviews",
        details:
          import.meta.env.MODE === "development"
            ? String(error?.message ?? error)
            : undefined,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};

