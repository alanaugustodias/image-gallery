# Image Gallery

An Image Gallery made in React for training purposes.

This meaning of this project is to implement an Image Gallery, with Infinite Scroll, using the most recent versions of the following libraries:

-   [React@17.0.1](https://github.com/facebook/react/blob/master/CHANGELOG.md#1701-october-22-2020)

-   [Typescript@4.1.3](https://www.npmjs.com/package/typescript/v/4.1.3)

-   [Webpack@5.12.1](https://www.npmjs.com/package/webpack/v/5.12.1)

-   [Jest@26.6.3](https://www.npmjs.com/package/jest/v/26.6.3)

## Requirements

This project was developed using the version 14.15.4 of NodeJs, and you can find it (or a newer if you want it) here:

-   [Get NodeJs 14 here](https://nodejs.org/en/download/)

To get images for the Gallery purpose, a couple of integrations with public APIs need to be all set.

Right now, the app supports integration with [Giphy](https://www.flickr.com/services/api/) and [Flickr](https://www.flickr.com/services/api/).

Following the starters guide of the APIs, you should at least create an account and provide the configuration on the files below:

- Flickr
```
/* src/configs/environement/Flickr/endpoints.tsx */
{
  flickrPhotosURL: <The Endpoint for searching Photos>,
  apiKey: <The key you created on your Flickr Account for accessing photos>
}
```

- Giphy
```
/* src/configs/environement/Giphy/endpoints.tsx */
{
  giphyGifsURL: <The Endpoint for searching Gifs>,
  apiKey: <The key you created on your Giphy Account for accessing photos>
}

```

The APIs can be changed on build-time, as explained on the next section

## How To

For you to start using this project, after having Node and NPM properly installed, you should first install all the dependencies:

- `npm install`

Now you can run the provided scripts from `package.json`:

- `npm run dev`

  Start the app on http://localhost:9000 using Webpack
  Uses the Mock environment to provide images data
  Mock data can be found on `src/assets/mock_data.json`

- `npm run dev:giphy`

  Start the app on http://localhost:9000 using Webpack
  Uses the Giphy environment to provide images from Giphy API

- `npm run dev:flickr`

  Start the app on http://localhost:9000 using Webpack
  Uses the Flickr environment to provide images from Flickr API

- `npm run prod`

  Build the Production version of the app using Webpack
  Output folder is: `/dist`
  Uses the Mock environment to provide images data
  Mock data can be found on `src/assets/mock_data.json`

- `npm run prod:giphy`

  Build the Production version of the app using Webpack
  Output folder is: `/dist`
  Uses the Giphy environment to provide images from Giphy API

- `npm run prod:flickr`

  Build the Production version of the app using Webpack
  Output folder is: `/dist`
  Uses the Flickr environment to provide images from Flickr API

- `npm run lint`

  Run ESLint with rules configured on `.eslistrc`

- `npm run test`

  Run Jest with rules configured on `jest.config.js`
  Provide coverage results on `/coverage` folder

- `npm run test:watch`

  Run Jest with rules configured on `jest.config.js` on Watch Mode

- `npm run serve`

  Start a serve on http://localhost:5000 for production build on `/dist` folder


## The development process so far

To make this project happen, a bunch of posts and blogs had to be consulted in order to get the best of the options and deliver a simple and efficient code.

Feel free to checkout some of them:

- https://usehooks-typescript.com/react-hook/use-intersection-observer

- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

- https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/