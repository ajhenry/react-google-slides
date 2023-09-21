import React from 'react';

interface BaseReactGoogleSlidesProps {
  slidesLink: string;
  loop?: boolean;
  slideDuration?: number;
  showControls?: boolean;
  position?: number;
  height?: string | number;
  width?: string | number;
  containerStyle?: object | null;
  ErrorComponent?: React.ReactNode | React.ElementType;
}

export type ReactGoogleSlidesProps = BaseReactGoogleSlidesProps &
  React.HTMLProps<HTMLIFrameElement>;

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
  showControls: boolean,
  position: number
): string => {
  let baseUrl = 'https://docs.google.com/presentation/d/';
  baseUrl += `${presentationKey}/embed?`;
  baseUrl += `loop=${loop ? 'true' : 'false'}`;

  // If slide duration given, add it
  if (slideDuration) {
    baseUrl += `&start=true`;
    baseUrl += `&delayms=${slideDuration * 1000}`;
  }

  if (!showControls) {
    baseUrl += `&rm=minimal`;
  }

  if (position) {
    baseUrl += `&slide=${position}`;
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
  slideDuration = null,
  showControls = false,
  position = null,
  width = '640px',
  height = '480px',
  containerStyle = null,
  ErrorComponent,
  ...props
}) => {
  const presentationKey = extractSlidesKey(slidesLink);
  const url = constructUrl(
    presentationKey,
    loop,
    slideDuration,
    showControls,
    position
  );

  if (!presentationKey && ErrorComponent) {
    return <>{ErrorComponent}</>;
  }

  return (
    <iframe
      src={url}
      width={calcDimension(width)}
      height={calcDimension(height)}
      style={containerStyle ? containerStyle : { border: 0 }}
      allowFullScreen={true}
      {...props}
    />
  );
};

export default ReactGoogleSlides;
