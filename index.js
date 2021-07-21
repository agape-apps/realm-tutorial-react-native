import 'react-native-get-random-values';
import { LogBox } from 'react-native';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// react-native-elements deprecations added in version 2.3 and will be removed
// in version 3:
LogBox.ignoreLogs([
  "'ListItem.title' prop has been deprecated and will be removed in the next version.",
  "'ListItem.checkmark' prop has been deprecated and will be removed in the next version.",
]);

AppRegistry.registerComponent(appName, () => App);
