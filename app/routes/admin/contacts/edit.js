import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(params){
    return Ember.RSVP.hash({
      contact: this.get('store').findRecord('contact', params.contact_id),
      countries: this.store.findAll('country')
    });
  },


  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit a new contact');
  },

  renderTemplate() {
    this.render('admin/contacts/form');
  },

  actions: {
    selectOnchangeCountry(country){
      let countryFromDb = this.get('store').findRecord('country', country);
      this.controller.get('model').contact.set('country', countryFromDb);
    },

    saveContact(newContact) {
      newContact.save().then(() => this.transitionTo('contacts'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }

  }

});
