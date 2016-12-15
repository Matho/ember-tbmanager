import { Model } from 'ember-cli-mirage';
import attr from 'ember-data/attr';

export default Model.extend({
  file_name: attr('string'),
  file_name_orig_path: attr('string'),
  file_name_small_path: attr('string'),
  dimmensions: attr('string'),

});
