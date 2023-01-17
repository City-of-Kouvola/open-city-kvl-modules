# Kouvola City App Modules

This package is used as a modular extension to https://github.com/City-of-Kouvola/KouvolaCityApp.git repository for adding additional functionality.

This package is separate from the Kouvola City App, so that it can be used by derivative applications when necessary.

## Getting Started

1. Clone the repository with `git clone git@github.com:City-of-Kouvola/open-city-kvl-modules.git`
2. Navigate to open-city-kvl-modules and install required dependencies `cd open-city-kvl-modules && npm install`
3. If doing development for iOS: `cd ios && pod install`
4. Android: Open Android emulator or connect real device with [USB debugging](https://developer.android.com/studio/debug/dev-options) enabled and Run command `npx react-native run-android` to start the debug version of the application
6. iOS: Open `ios/OpenCityKvlModules.xcworkspace` in Xcode, select emulator or real device and start the application

## Development

When developing new features/bug fixes:

1. Create new feature/bug fix branch from the `Develop` branch
2. Add code below to top of the `index.ts` to have modules visible in debug environment 
```
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import WebViewModule from 'modules/WebView';

AppRegistry.registerComponent(appName, () => App);
```
3. Develop and test changes locally
4. Remove step 2 rows before pushing code changes to Github repository
5. Create Pull Request to the `Develop` branch

Kouvola City modules has been developed using:

`"TypeScript”: “4.5.5"`

`"react": "17.0.2"`

`"react-native": "0.67.1"`

`"node": "16.0.0"`


## Getting Started For Integration Into Other Applications

1. Make sure your app contains atleast React `16.9.0`, React Native `0.61.4`, react-native-vector-icons `6.6.0` and react-native-webview `8.0.1`
2. Add `"` `[PACKAGE NAME]` `": "git+` `[REPOSITORY CLONING URL]` `"` like this: `"OpenCityKvlModules": "git+https://github.com/City-of-Kouvola/open-city-kvl-modules.git"` to your package.json
3. `npm install`
4. Add `import { WebViewModule } from '` `[PACKAGE NAME]` `'` to the file you wish to use it in
 
## Included Features

### WebView module

Displays a webpage provided via props, can also show a popup modal with navigation information when opened.
Takes four props:

1. `src` (`required`): `string` URL to redirect to
2. `modalVisible` (`required`): `Boolean` whether to show a message when redirected
3. `modalTimeout` (`optional`): `Number` time in milliseconds before the redirection message is automatically hidden
4. `OnLoadEnd` (`optional`): `Function` executed after content is loaded

Example usage:

```
<WebViewModule
    src='https://github.com/City-of-Kouvola/open-city-kvl-modules'
    modalTimeout={5000}
    modalVisible={true}
/>
```

This code will navigate to https://github.com/City-of-Kouvola/open-city-kvl-modules and show a small popup for 5 seconds informing about the redirection.