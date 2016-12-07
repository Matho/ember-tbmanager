import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  code: DS.attr(),

  contacts: DS.hasMany('country'),


  isValidTitle: Ember.computed.notEmpty('title'),
  isValidCode: Ember.computed.notEmpty('code'),

  isValid: Ember.computed.and('isValidTitle', 'isValidCode'),

});
