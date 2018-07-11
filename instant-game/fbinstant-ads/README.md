# FBInstant Audience Network Integration Demo

This demo shows how to run Audience Network ads inside of an Instant Game.
Read the [full documentation](https://developers.facebook.com/docs/games/instant-games/guides/ads-monetization)

## Pre-requisites
To run this demo you'll need
1. Have Yarn installed ([Install Yarn](https://yarnpkg.com/en/docs/install))
1. Have a Facebook App ID configured with Instant Games and Audience Network.

Read the [Instant Games Getting Started](https://developers.facebook.com/docs/games/instant-games/getting-started/quickstart#app-setup) and the [Instant Games Ads Monetization](https://developers.facebook.com/docs/games/instant-games/guides/ads-monetization) guides for more information.

## Installing dependencies
After checking out the code, run
```
yarn install
```

## Configuration
There are two files that need to be configured with information specific to your app.
1. `config.json`: paste your App ID and App Upload Access Token. The latter can be found by clicking the **Get Asset Upload Access Token** button in your app's Web Hosting configuration (`https://developers.facebook.com/apps/<YOUR_APP_ID>/hosting/`)
```json
{
	"FB_appId":"<YOUR APP ID HERE>",
	"FB_uploadAccessToken": "<YOUR ACCESS TOKEN HERE>"
}
```
2. `index.html`: paste the placement IDs for your ads in the respective constants. Information on how to create your placement IDs can be found in the [full documentation](https://developers.facebook.com/docs/games/instant-games/guides/ads-monetization)
```js
const INTERSTITIAL_PLACEMENT_ID = '<YOUR INTERSTITIAL PLACEMENT ID>';
const REWARDED_PLACEMENT_ID = '<YOUR REWARDED VIDEO PLACEMENT ID>';
```

## Option 1: Running locally against a mocked version of the SDK
You can test your build against a local mock of the FBInstant SDK by running
```
$ yarn mock
```
This should open the browser and run your index.html in the root of your project. The local webserver will be configured with a live reload feature. You can use this mode to make quick iterations on your game that don't depend on real-life SDK responses. You can find the mocked SDK in the `./js/mock` folder.

Clicking the "show ads" buttons in this mode should result in a console error, since the Ads functions are not implemented in the mock SDK. This is expected.

## Option 2: Running locally against the live SDK
If you want to test your build against the live SDK, you can do so by running the command:
```
$ yarn test
```
This will copy all the relevant files to the `./build` folder and run a local webserver from there. It will then point your browser to **embedded player** testing environment: `https://www.facebook.com/embed/instantgames/<YOUR_GAME_ID>/player?game_url=https://localhost:8000`. ([More information on the embedded player testing environment](https://developers.facebook.com/docs/games/instant-games/test-publish-share))

This is as close as it gets to the real-life execution in a desktop browser. You should use this mode when you're making modifications that depend on real information being returned by the SDK.

**Note that the webserver will run with HTTPS, so the first time you execute on this mode, you might need to go to `https://localhost:8000`  and approve the certificates with your browser**

Clicking the "show ads" buttons in this mode should result in a message being displayed saying that the client doesn't support this operation. This is expected, since Audience Network ads are not available on the desktop browser.



## Option 3: Running on Messenger on your mobile device
Provided that you have declared all the information in the **Configuration** section above, you can zip and upload your build by running:
```
$ yarn push
```
This will copy all the relevant files to the `./build` folder, create a .ZIP archive of them and upload them to your app. If all these operations are successful, it will open your app's web hosting page, so that you can push the new build live ([more information on pushing builds live](https://developers.facebook.com/docs/games/instant-games/test-publish-share)). Once the build is in **Production** state, you can open Messenger on your mobile device. Your game should show up in the Messenger games list in a sub-section called "In development".

Tapping the "show ads" buttons in this mode should show ads successfully.
