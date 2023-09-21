# react-google-slides

A very thin wrapper for displaying Google Slides with React

[Demo](https://ajhenry.github.io/react-google-slides/)

[NPM](https://www.npmjs.com/package/react-google-slides)

## Installation

```bash
npm i react-google-slides
```

```bash
yarn add react-google-slides
```

## Usage

```tsx
import ReactGoogleSlides from "react-google-slides";

const SlideShow = () => {
  return (
    <ReactGoogleSlides
      width={640}
      height={480}
      slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
      slideDuration={5}
      position={1}
      showControls
      loop
    />
  );
}
```

## Props

### Prop Types

```ts
interface ReactGoogleSlidesProps {
  slidesLink: string;
  loop?: boolean;
  slideDuration?: number;
  showControls?: boolean;
  position?: number;
  height?: string | number;
  width?: string | number;
  containerStyle?: object;
  ErrorComponent?: React.ReactNode | React.ElementType;
};
```

This prop also supports all of the props that the iframe element supports, such as `allowFullScreen` and `allow`. Take a look at `React.HTMLProps<HTMLIFrameElement>` for more information.

#### slidesLink

Type: `string` - **required**

Link to the google slides presentation

#### loop

Type: `boolean`\
Default: `false`

Loops the slideshow after the presentation is finished

#### slideDuration

Type: `number`\
Default: `project default`


The duration for each slide to show on screen, this applies to _all_ of the slides

#### showControls

Type: `boolean`\
Default: `false`

Toggles the slideshow controls at the bottom of the screen

#### position

Type: `number`\
Default: `0`

What slide to start the slideshow on

#### height

Type: `number|string`

Height of the player, i.e. "100%" or `100` for pixels

#### width

Type: `number|string`

Width of the player, i.e. "100%" or `100` for pixels

#### containerStyle

Type: `object`

React Stylesheet to pass in to use as the container style

#### ErrorComponent

Type: `React.ReactNode | React.ElementType`

React Component to render when there is an invalid presentation key provided

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

There is an example app you can test your changes with

```sh
cd example && yarn
yarn start
```

This will start the example app at <http://localhost:3000/>

## License

MIT © [AJHenry](https://github.com/AJHenry)
