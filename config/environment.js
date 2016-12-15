/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tbmanager',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: 'AIzaSyDBA0Jk8TMXWW2YoHb3Zx-HbZ7mUxP-ZRo',
      authDomain: 'tbmanager-2f559.firebaseapp.com',
      databaseURL: 'https://tbmanager-2f559.firebaseio.com',
      storageBucket: 'tbmanager-2f559.appspot.com',
    },
    'ember-simple-auth': {
      routeAfterAuthentication: 'dashboard',
      routeIfAlreadyAuthenticated: 'dashboard'
    },
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "*"
    },

    // Disable mirage by default
    'ember-cli-mirage': {
      enabled: false
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };



  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.API_HOST = "http://localhost:3000";
    ENV.API_IMG_PATH = "/uploads";
    ENV.API_IMG_THUMB_PATH = "/uploads/small";
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';
    // remove host address for tests
    // so the paths display omits the url
    ENV.API_HOST = "";
    // Turn on mirage only for testing
    ENV['ember-cli-mirage'] = {
      enabled: true
    };

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
