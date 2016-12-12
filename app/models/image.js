import DS from 'ember-data';

export default DS.Model.extend({
  file_name: DS.attr('string'),
  file_name_orig_path: DS.attr('string'),
  file_name_small_path: DS.attr('string'),
  dimmensions: DS.attr('string'),

});
