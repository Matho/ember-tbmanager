import { Model } from 'ember-cli-mirage';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  password: attr('string'),
  passwordConfirmation: attr('string'),
  authenticationToken: attr('string'),
});
