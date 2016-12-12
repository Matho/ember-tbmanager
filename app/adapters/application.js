// app/adapters/application.js

import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'tbmanager/config/environment';

const { String: { pluralize, underscore } } = Ember;

export default JSONAPIAdapter.extend(DataAdapterMixin,{
  host: ENV.API_HOST,
  authorizer: 'authorizer:devise',

  pathForType(type) {
    return pluralize(underscore(type));
  }

});
