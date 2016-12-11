import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  web: DS.attr('string'),
  city: DS.attr('string'),
  address: DS.attr('string'),

  country: DS.belongsTo('country'),

  isValidName: Ember.computed('name', function() {
    return this.get('name')  && this.get('name').length >= 2;
  }),
  isValidSurname: Ember.computed('surname', function() {
    return this.get('surname')  && this.get('surname').length >= 2;
  }),
  isValidPhone: Ember.computed.notEmpty('phone'),
  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isValidWeb: Ember.computed.notEmpty('web'),
  isValidCity: Ember.computed.notEmpty('city'),
  isValidAddress: Ember.computed.notEmpty('address'),
  isValidCountry: Ember.computed.notEmpty('country.title'),

  isValid: Ember.computed.and('isValidName', 'isValidSurname', 'isValidPhone', 'isValidEmail', 'isValidWeb', 'isValidCity', 'isValidAddress', 'isValidCountry'),
});
