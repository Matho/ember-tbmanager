import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  code: DS.attr('string'),

  contacts: DS.hasMany('country'),


  isValidTitle: Ember.computed.notEmpty('title'),
  isValidCode: Ember.computed.notEmpty('code'),

  isValid: Ember.computed.and('isValidTitle', 'isValidCode'),

});
