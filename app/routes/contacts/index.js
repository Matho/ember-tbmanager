import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin,{
  queryParams: {
    search: {
      refreshModel: true
    }
  },


  model(params){

    if (params.search === ""){
      return this.store.findAll('contact');
    }
    else {
      var that = this;

      return new Ember.RSVP.Promise(function(resolve) {
        that.store.findAll('contact').then(function(countries) {
          resolve(countries.filterBy(params.sortBy, params.search));
        });
      });
    }
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
