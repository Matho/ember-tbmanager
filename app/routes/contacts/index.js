import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('contact');
  },

  actions: {

    redirectToEditContact(contact){
      this.transitionTo('contacts.edit', contact.id);
    },

    redirectToShowContact(contact){
      this.transitionTo('contacts.show', contact.id);
    },

    deleteContact(contact) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        contact.destroyRecord();
      }
    }
  }

});
