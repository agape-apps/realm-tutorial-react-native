// fix warning from bson
import 'react-native-get-random-values';

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// suppress react-native-elements deprecation warnings (since version 2.3)
LogBox.ignoreLogs([
  "'ListItem.title' prop has been deprecated and will be removed in the next version.",
  "'ListItem.checkmark' prop has been deprecated and will be removed in the next version.",
]);

AppRegistry.registerComponent(appName, () => App);
