/**
 * Custom Open Graph image renderer – brandedLogo style with hero photo, logo, title and description.
 * Used by astro-opengraph-images at build time.
 */
import type { RenderFunctionInput } from 'astro-opengraph-images';
import path from 'path';
import * as fs from 'node:fs';

const { twj } = await import('tw-to-css');

const publicDir = path.join(process.cwd(), 'public', 'assets', 'images');

// Load hero image (same as main page hero); convert WebP→PNG for Satori compatibility
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

// Load RimoByte logo (opposite side)
const logoPath = path.join(publicDir, 'logo-rimobyte-light-grey.png');
const logoBase64 = fs.existsSync(logoPath)
  ? `data:image/png;base64,${fs.readFileSync(logoPath).toString('base64')}`
  : null;

const white = '#ffffff';

// Hero-style: circular image with blue-to-purple gradient border (same as HeroSection)
const heroCircleSize = 130;
const gradientBorderWidth = 4;
// Photo block height (circle + border)
const headerBlockHeight = heroCircleSize + gradientBorderWidth * 2;
// Logo at half the height of the photo
const logoHeight = Math.round(headerBlockHeight / 2);
const logoAspect = 160 / 42;
const logoWidth = Math.round(logoHeight * logoAspect);

export async function brandedLogoWithSubtitle({
  title,
  description,
}: RenderFunctionInput): Promise<React.ReactNode> {
  const displayTitle = title.replace(/\s*\|\s*RimoByte\s*$/i, '').trim();
  const displayDescription = description ? description.trim() : null;

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
        {/* Line 1: photo left, logo right – same height */}
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
          {/* Photo – left */}
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
          {/* Logo – right, half the height of the photo */}
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

        {/* Line 2: title */}
        <h1
          style={{
            ...twj('text-[44px] font-bold text-left leading-tight'),
            color: white,
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          {displayTitle}
        </h1>

        {/* Line 3: description – one phrase, not cut */}
        {displayDescription && (
          <p
            style={{
              ...twj('text-[24px] font-normal text-left leading-snug'),
              color: white,
            }}
          >
            {displayDescription}
          </p>
        )}
      </div>
    </div>
  );
}
