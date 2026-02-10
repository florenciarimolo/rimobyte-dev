import React from 'react';

type NormalizedReview = {
  authorName: string;
  rating: number;
  text: string;
  publishedRelative?: string;
  publishTime?: string | null;
};

type ReviewsResponse = {
  rating: number | null;
  userRatingCount: number | null;
  googleMapsUrl: string | null;
  reviews: NormalizedReview[];
};

interface GoogleReviewsSectionProps {
  /**
   * Visual variant for different backgrounds.
   * Use "dark" on black/dark landing pages, default for main page.
   */
  variant?: 'default' | 'dark';
  /**
   * Locale to request reviews in.
   * When "es", reviews will be requested in Spanish; when "en", in English.
   */
  locale?: 'es' | 'en';
}

const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  variant = 'default',
  locale = 'es',
}) => {
  const [data, setData] = React.useState<ReviewsResponse | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    const loadReviews = async () => {
      try {
        const params = new URLSearchParams();
        if (locale) {
          params.set('lang', locale);
        }
        const endpoint = `/api/google-reviews${
          params.toString() ? `?${params.toString()}` : ''
        }`;

        const response = await fetch(endpoint, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to load reviews: ${response.status}`);
        }

        const json = (await response.json()) as ReviewsResponse;

        if (!cancelled) {
          setData(json);
        }
      } catch (err: any) {
        if (!cancelled && err?.name !== 'AbortError') {
          if (import.meta.env.MODE === 'development') {
            console.error('Error fetching Google reviews:', err);
          }
          setError('No se han podido cargar las reseñas en este momento.');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void loadReviews();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  const hasReviews = Boolean(
    data && Array.isArray(data.reviews) && data.reviews.length > 0,
  );

  // If finished loading and there is no data to show, avoid rendering an empty block
  if (!isLoading && !error && !hasReviews) {
    return null;
  }

  const containerClasses =
    variant === 'dark'
      ? 'relative py-16 bg-black'
      : 'relative py-16 bg-gray-50 dark:bg-gray-900';

  const titleClasses =
    variant === 'dark'
      ? 'text-3xl md:text-4xl font-bold text-white text-center'
      : 'text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center';

  const subtitleClasses =
    variant === 'dark'
      ? 'mt-3 text-base md:text-lg text-gray-300 text-center max-w-2xl mx-auto'
      : 'mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto';

  const cardClasses =
    variant === 'dark'
      ? 'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex flex-col h-full'
      : 'rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900/60 backdrop-blur-sm p-5 flex flex-col h-full';

  const ratingColorClasses =
    variant === 'dark'
      ? 'text-yellow-300'
      : 'text-yellow-500 dark:text-yellow-300';

  return (
    <section className={containerClasses} aria-labelledby="google-reviews">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="google-reviews" className={titleClasses}>
            Opiniones de clientes en{' '}
            <span className="inline-flex items-baseline gap-[1px]">
              <span className="font-semibold" style={{ color: '#4285F4' }}>
                G
              </span>
              <span className="font-semibold" style={{ color: '#EA4335' }}>
                o
              </span>
              <span className="font-semibold" style={{ color: '#FBBC05' }}>
                o
              </span>
              <span className="font-semibold" style={{ color: '#4285F4' }}>
                g
              </span>
              <span className="font-semibold" style={{ color: '#34A853' }}>
                l
              </span>
              <span className="font-semibold" style={{ color: '#EA4335' }}>
                e
              </span>
            </span>
          </h2>
          <p className={subtitleClasses}>
            Estas son algunas de las reseñas reales que han dejado mis clientes
            después de trabajar juntos.
          </p>

          {data && (data.rating || data.userRatingCount) && (
            <div className="mt-6 flex flex-col items-center gap-1">
              <div className={`flex items-center gap-2 ${ratingColorClasses}`}>
                <span className="text-2xl font-semibold">
                  {data.rating?.toFixed(1) ?? '5.0'}
                </span>
                <StarRating rating={data.rating ?? 5} />
              </div>
              {typeof data.userRatingCount === 'number' && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Basado en {data.userRatingCount}{' '}
                  {data.userRatingCount === 1 ? 'reseña' : 'reseñas'} en Google
                </p>
              )}
              {data.googleMapsUrl && (
                <a
                  href={data.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Ver todas las reseñas en Google
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          )}
        </div>

        {isLoading && (
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={`${cardClasses} animate-pulse space-y-3`}
              >
                <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-3 w-4/6 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            ))}
          </div>
        )}

        {!isLoading && error && (
          <div
            className={`${cardClasses} max-w-xl mx-auto text-center text-sm`}
            role="status"
          >
            <p className="text-gray-700 dark:text-gray-200">{error}</p>
            {data?.googleMapsUrl && (
              <a
                href={data.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                Ver reseñas directamente en Google
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}

        {!isLoading && !error && hasReviews && (
          <div className="grid gap-4 md:grid-cols-3">
            {data!.reviews.map((review, index) => (
              <article
                key={`${review.authorName}-${index}`}
                className={cardClasses}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {review.authorName}
                  </h3>
                  <div
                    className={`flex items-center gap-1 text-xs font-medium ${ratingColorClasses}`}
                  >
                    <StarRating rating={review.rating} />
                    <span>{review.rating.toFixed(1)}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-5">
                  {review.text}
                </p>
                {(review.publishedRelative || review.publishTime) && (
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    {review.publishedRelative ||
                      new Date(review.publishTime as string).toLocaleDateString()}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.round(Math.min(Math.max(rating, 0), maxStars));

  return (
    <div className="flex items-center" aria-hidden="true">
      {Array.from({ length: maxStars }).map((_, index) => {
        const isFilled = index < filledStars;
        return (
          <span
            key={index}
            className={
              isFilled
                ? 'text-yellow-400 dark:text-yellow-300'
                : 'text-gray-300 dark:text-gray-600'
            }
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default GoogleReviewsSection;

