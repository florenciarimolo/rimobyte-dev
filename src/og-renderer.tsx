/**
 * Custom Open Graph image renderer – brandedLogo style with hero photo, logo, title and description.
 * Used by astro-opengraph-images at build time.
 */
import type { RenderFunctionInput } from 'astro-opengraph-images';
import path from 'path';
import * as fs from 'node:fs';

const { twj } = await import('tw-to-css');

const publicDir = path.join(process.cwd(), 'public', 'assets', 'images');

const heroImagePath = path.join(publicDir, 'programadora-web.webp');
let heroImageBase64: string | null = null;
if (fs.existsSync(heroImagePath)) {
  try {
    const sharp = (await import('sharp')).default;
    const pngBuffer = await sharp(fs.readFileSync(heroImagePath)).png().toBuffer();
    heroImageBase64 = `data:image/png;base64,${pngBuffer.toString('base64')}`;
  } catch {
    heroImageBase64 = null;
  }
}

const logoPath = path.join(publicDir, 'logo-rimobyte-light-grey.png');
const logoBase64 = fs.existsSync(logoPath)
  ? `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`
  : null;

const white = '#ffffff';
const muted = '#9ca3af';
const accent = '#60a5fa';

const heroCircleSize = 130;
const gradientBorderWidth = 4;
const headerBlockHeight = heroCircleSize + gradientBorderWidth * 2;
const logoHeight = Math.round(headerBlockHeight / 2);
const logoAspect = 160 / 42;
const logoWidth = Math.round(logoHeight * logoAspect);

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(' ', max);
  return text.slice(0, cut > 0 ? cut : max) + '…';
}

export async function brandedLogoWithSubtitle({
  title,
  description,
}: RenderFunctionInput): Promise<React.ReactNode> {
  // Strip "| RimoByte" and clean up pipe segments for a cleaner visual title
  const rawTitle = title.replace(/\s*\|\s*RimoByte\s*$/i, '').trim();

  // Split pipe-separated title into main heading + services tagline
  const parts = rawTitle.split(/\s*\|\s*/);
  const mainTitle = parts[0];
  const servicesLine = parts.length > 1 ? parts.slice(1).join(' · ') : null;

  // Extract first sentence of description for OG image (keep it punchy)
  const descText = description ? truncate(description.trim().split('. ')[0] + '.', 120) : null;

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111827',
        padding: 48,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          width: '100%',
        }}
      >
        {/* Line 1: photo left, logo right */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexShrink: 0,
              height: headerBlockHeight,
            }}
          >
            {heroImageBase64 && (
              <div
                style={{
                  width: headerBlockHeight,
                  height: headerBlockHeight,
                  borderRadius: '50%',
                  padding: gradientBorderWidth,
                  background: 'linear-gradient(to right, #3b82f6, #a855f7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    width: heroCircleSize,
                    height: heroCircleSize,
                    borderRadius: '50%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={heroImageBase64}
                    alt=""
                    width={heroCircleSize}
                    height={heroCircleSize}
                    style={{
                      width: heroCircleSize,
                      height: heroCircleSize,
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: headerBlockHeight,
            }}
          >
            {logoBase64 ? (
              <img
                src={logoBase64}
                alt="RimoByte"
                width={logoWidth}
                height={logoHeight}
                style={{ objectFit: 'contain', height: logoHeight }}
              />
            ) : (
              <span style={{ fontSize: 20, fontWeight: 500, color: white }}>RimoByte</span>
            )}
          </div>
        </div>

        {/* Main title */}
        <h1
          style={{
            ...twj('text-[44px] font-bold text-left leading-tight'),
            color: white,
            marginTop: 32,
            marginBottom: 0,
          }}
        >
          {mainTitle}
        </h1>

        {/* Services tagline (from pipe-separated part of title) */}
        {servicesLine && (
          <p
            style={{
              ...twj('text-[26px] font-normal text-left leading-snug'),
              color: accent,
              marginTop: 12,
              marginBottom: 0,
            }}
          >
            {servicesLine}
          </p>
        )}

        {/* Description — first sentence only */}
        {descText && (
          <p
            style={{
              ...twj('text-[22px] font-normal text-left leading-snug'),
              color: muted,
              marginTop: 16,
            }}
          >
            {descText}
          </p>
        )}
      </div>
    </div>
  );
}
