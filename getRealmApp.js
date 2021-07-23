// Provides access to the Realm app instance.
//
// To get the app working with your backend, you first need to instantiate
// the Realm app. The Realm app is the interface to the MongoDB Realm backend.

import Realm from 'realm';

let app;

// Returns the shared instance of the Realm app.
// https://docs.mongodb.com/realm-sdks/js/latest/Realm.App.html
export default function getRealmApp() {
  if (app === undefined) {
    const appId = 'tasktracker4oregon-eeefo'; // Set Realm app ID here.
    const appConfig = {
      id: appId,
      timeout: 10000,
      // This describes the options used for local app configuration.
      app: {
        name: 'default',
        version: '0',
      },
    };
    // Creates a new app and connects to a MongoDB Realm instance.
    app = new Realm.App(appConfig);
  }
  return app;
}
