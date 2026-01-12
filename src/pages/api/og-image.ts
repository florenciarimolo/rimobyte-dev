import { ImageResponse } from '@vercel/og';
import type { APIRoute } from 'astro';
import { OGImageComponent } from '@/components/og-image-component';
import React from 'react';

// FontOptions type for @vercel/og
type FontOptions = {
  name: string;
  data: ArrayBuffer;
  style?: 'normal' | 'italic';
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
};

// Load Inter font from Google Fonts
// Using Inter Regular (400), Medium (500), and SemiBold (600) from Google Fonts CDN
async function loadInterFont(weight: 400 | 500 | 600): Promise<ArrayBuffer | null> {
  try {
    // Inter font URLs from Google Fonts
    const fontUrls: Record<number, string> = {
      400: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
      500: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
      600: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    };
    
    const fontUrl = fontUrls[weight];
    const response = await fetch(fontUrl);
    if (!response.ok) {
      return null;
    }
    return response.arrayBuffer();
  } catch (error) {
    console.error(`Failed to load Inter font (weight ${weight}):`, error);
    return null;
  }
}

export const GET: APIRoute = async ({ request }) => {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get parameters
    const title = searchParams.get('title') || 'RimoByte';
    const description = searchParams.get('description') || null;
    const city = searchParams.get('city') || null;
    
    // Canvas dimensions
    const width = 1200;
    const height = 630;
    
    // Colors from design system
    const bgColor = '#111827'; // gray-900
    const textWhite = '#ffffff';
    const textGray = '#9ca3af'; // gray-400
    const textMuted = '#6b7280'; // gray-500
    
    // Padding
    const padding = 80;
    const maxTextWidth = 900;
    
    // Font sizes
    const siteNameSize = 28;
    const titleSize = 64;
    const subtitleSize = 36;
    const contextSize = 24;
    
    // Line heights
    const titleLineHeight = 1.1;
    const subtitleLineHeight = 1.2;
    
    // Spacing
    const siteNameMarginBottom = 20;
    const titleMarginBottom = description ? 24 : 0;
    const subtitleMarginBottom = city ? 32 : 0;
    
    // Truncate text to max lines (simple word-based truncation)
    const truncateText = (text: string, maxLines: number): string => {
      const words = text.split(' ');
      const lines: string[] = [];
      let currentLine = '';
      const wordsPerLine = Math.ceil(words.length / maxLines);
      
      for (let i = 0; i < words.length; i++) {
        if (currentLine) {
          currentLine += ' ' + words[i];
        } else {
          currentLine = words[i];
        }
        
        // If we've reached the approximate words per line, start a new line
        if ((i + 1) % wordsPerLine === 0 && lines.length < maxLines - 1) {
          lines.push(currentLine);
          currentLine = '';
        }
      }
      
      if (currentLine) {
        lines.push(currentLine);
      }
      
      // If we have more lines than max, truncate
      if (lines.length > maxLines) {
        const truncated = lines.slice(0, maxLines);
        const lastLine = truncated[maxLines - 1];
        if (lastLine.length > 50) {
          truncated[maxLines - 1] = lastLine.substring(0, 47) + '...';
        }
        return truncated.join('\n');
      }
      
      return lines.join('\n');
    };
    
    const truncatedTitle = truncateText(title, 3);
    
    // Truncate description to max 2 lines
    const truncatedDescription = description 
      ? truncateText(description, 2)
      : null;
    
    // Build context line
    const contextLine = city 
      ? `${city} · WordPress`
      : null;
    
    // Load fonts (try to load all weights, but continue even if they fail)
    const [interRegular, interMedium, interSemiBold] = await Promise.all([
      loadInterFont(400),
      loadInterFont(500),
      loadInterFont(600),
    ]);
    
    const fonts: FontOptions[] = [];
    
    if (interRegular) {
      fonts.push({
        name: 'Inter',
        data: interRegular,
        style: 'normal',
        weight: 400,
      });
    }
    if (interMedium) {
      fonts.push({
        name: 'Inter',
        data: interMedium,
        style: 'normal',
        weight: 500,
      });
    }
    if (interSemiBold) {
      fonts.push({
        name: 'Inter',
        data: interSemiBold,
        style: 'normal',
        weight: 600,
      });
    }
    
    return new ImageResponse(
      React.createElement(OGImageComponent, {
        truncatedTitle,
        truncatedDescription,
        contextLine,
        bgColor,
        padding,
        fontFamily: fonts.length > 0 ? 'Inter, sans-serif' : 'system-ui, sans-serif',
        siteNameSize,
        textMuted,
        siteNameMarginBottom,
        titleSize,
        textWhite,
        titleLineHeight,
        titleMarginBottom,
        maxTextWidth,
        subtitleSize,
        textGray,
        subtitleLineHeight,
        subtitleMarginBottom,
        contextSize,
      }),
      {
        width,
        height,
        fonts: fonts.length > 0 ? fonts : undefined,
      }
    );
  } catch (error: any) {
    console.error('Error generating OG image:', error);
    return new Response(`Failed to generate image: ${error.message}`, { status: 500 });
  }
};
