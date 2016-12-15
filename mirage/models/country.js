import { Model } from 'ember-cli-mirage';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  code: attr('string'),
});
