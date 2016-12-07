import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  web: DS.attr('string'),
  city: DS.attr('string'),
  address: DS.attr('string'),
  countryId: DS.attr('number'),

  country: DS.belongsTo('country'),

  isValidName: Ember.computed.notEmpty('name'),
  isValidSurname: Ember.computed.notEmpty('surname'),
  isValidPhone: Ember.computed.notEmpty('phone'),
  isValidEmail: Ember.computed.notEmpty('email'),
  isValidWeb: Ember.computed.notEmpty('web'),
  isValidCity: Ember.computed.notEmpty('city'),
  isValidAddress: Ember.computed.notEmpty('address'),
  isValidCountry: Ember.computed.notEmpty('country.title'),

  isValid: Ember.computed.and('isValidName', 'isValidSurname', 'isValidPhone', 'isValidEmail', 'isValidWeb', 'isValidCity', 'isValidAddress', 'isValidCountry' ),
});
