import React from 'react';

interface OGImageProps {
  truncatedTitle: string;
  truncatedDescription: string | null;
  contextLine: string | null;
  bgColor: string;
  padding: number;
  fontFamily: string;
  siteNameSize: number;
  textMuted: string;
  siteNameMarginBottom: number;
  titleSize: number;
  textWhite: string;
  titleLineHeight: number;
  titleMarginBottom: number;
  maxTextWidth: number;
  subtitleSize: number;
  textGray: string;
  subtitleLineHeight: number;
  subtitleMarginBottom: number;
  contextSize: number;
}

export const OGImageComponent: React.FC<OGImageProps> = ({
  truncatedTitle,
  truncatedDescription,
  contextLine,
  bgColor,
  padding,
  fontFamily,
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
}) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: bgColor,
        padding: `${padding}px`,
        fontFamily: fontFamily,
      }}
    >
      {/* Site Name */}
      <div
        style={{
          fontSize: siteNameSize,
          fontWeight: 500,
          color: textMuted,
          marginBottom: siteNameMarginBottom,
        }}
      >
        RimoByte
      </div>
      
      {/* Main Title */}
      <div
        style={{
          fontSize: titleSize,
          fontWeight: 600,
          color: textWhite,
          lineHeight: titleLineHeight,
          marginBottom: titleMarginBottom,
          maxWidth: maxTextWidth,
          whiteSpace: 'pre-wrap',
        }}
      >
        {truncatedTitle}
      </div>
      
      {/* Optional Subtitle */}
      {truncatedDescription && (
        <div
          style={{
            fontSize: subtitleSize,
            fontWeight: 400,
            color: textGray,
            lineHeight: subtitleLineHeight,
            marginBottom: subtitleMarginBottom,
            maxWidth: maxTextWidth,
            whiteSpace: 'pre-wrap',
          }}
        >
          {truncatedDescription}
        </div>
      )}
      
      {/* Optional Context Line */}
      {contextLine && (
        <div
          style={{
            fontSize: contextSize,
            fontWeight: 400,
            color: textMuted,
            maxWidth: maxTextWidth,
          }}
        >
          {contextLine}
        </div>
      )}
    </div>
  );
};
