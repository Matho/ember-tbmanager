import { Model } from 'ember-cli-mirage';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  surname: attr('string'),
  phone: attr('string'),
  email: attr('string'),
  web: attr('string'),
  city: attr('string'),
  address: attr('string'),
});
