import React from 'react';

export type ReactGoogleSlidesProps = {
  slidesLink: string;
  loop?: boolean;
  slideDuration?: number;
  showControls?: boolean;
  height?: string | number;
  width?: string | number;
  containerStyle?: object | null;
};

/**
 * Generates iframe compatible url to display the presentation
 * @param presentationKey The Google Slides presentation key
 * @param loop Boolean for whether the slides should loop after finishing
 * @param slideDuration Duration in seconds for how long each slide should be
 * @param showControls Boolean for whether to display the Google Slides controls
 */
const constructUrl = (
  presentationKey: string | null,
  loop: boolean,
  slideDuration: number,
  showControls: boolean
): string => {
  if (!presentationKey) {
    throw new Error(
      'Failed to fetch presentation key, check the presentation url'
    );
  }

  let baseUrl = 'https://docs.google.com/presentation/d/';
  baseUrl += `${presentationKey}/embed?`;
  baseUrl += `start=true`;
  baseUrl += `&loop=${loop ? 'true' : 'false'}`;
  baseUrl += `&delayms=${slideDuration * 1000}`;

  if (!showControls) {
    baseUrl += `&rm=minimal`;
  }

  return baseUrl;
};

// Regex for extracting presentation id
const regex: RegExp = new RegExp(
  `(((https|http):\/\/|)docs\.google\.com\/presentation\/d\/)(.+?(?=(\/.+|\/|$)))`
);

// Extracts the slide id from the share-able url
const extractSlidesKey = (slidesUrl: string): string | null => {
  const match = regex.exec(slidesUrl);
  return match ? match[4] : null;
};

// Calculates dimension for string/numbers
const calcDimension = (dim: string | null | number): string =>
  dim ? (typeof dim === 'number' ? `${dim}px` : dim) : `480px`;

const ReactGoogleSlides: React.FC<ReactGoogleSlidesProps> = ({
  slidesLink,
  loop = false,
  slideDuration = 2,
  showControls = false,
  width = '640px',
  height = '480px',
  containerStyle = null
}: ReactGoogleSlidesProps) => {
  const presentationKey = extractSlidesKey(slidesLink);
  const url = constructUrl(presentationKey, loop, slideDuration, showControls);

  return (
    <iframe
      src={url}
      width={calcDimension(width)}
      height={calcDimension(height)}
      style={containerStyle ? containerStyle : { border: 0 }}
      allowFullScreen={true}
    />
  );
};

export default ReactGoogleSlides;
