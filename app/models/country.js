import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  codeString: DS.attr(),

  contacts: DS.hasMany('country')
});
