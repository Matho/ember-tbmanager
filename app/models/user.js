import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  authenticationToken: DS.attr('string'),


  isValidPassword: Ember.computed('password', function() {
    return this.get('password')  && this.get('password').length >= 6;
  }),
  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isValid: Ember.computed.and('isValidPassword','isValidEmail'),

});
