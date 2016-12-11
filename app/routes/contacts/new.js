import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      contact: this.store.createRecord('contact'),
      countries: this.store.findAll('country')
    })
  },


  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new contact');
  },

  renderTemplate() {
    this.render('contacts/form');
  },


  actions: {
    selectOnchangeCountry(country){
      let countryFromDb = this.get('store').peekRecord('country', country);
      this.controller.get('model').contact.set('country', countryFromDb);
    },

    saveContact(newContact) {
      newContact.save().then(() => this.transitionTo('contacts'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});
