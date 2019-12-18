import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import WebViewModule from 'modules/WebView';

AppRegistry.registerComponent(appName, () => App);

export { WebViewModule };
