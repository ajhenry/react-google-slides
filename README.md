# react-google-slides

A very thin wrapper for displaying Google Slides with React

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
      showControls
      loop
    />
  );
}
```

Check out the [example](https://github.com/AJHenry/react-google-slides/blob/master/example/src/App.tsx) app for some more usage

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

There is an example app you can test your changes with

```sh
cd example && yarn
yarn start
```

This will start the example app at http://localhost:3000/

## License

MIT © [AJHenry](https://github.com/AJHenry)
