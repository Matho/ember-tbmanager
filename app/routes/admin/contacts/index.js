import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
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

    redirectToNewContact(){
      this.transitionTo('admin.contacts.new');
    },

    redirectToEditContact(contact){
      this.transitionTo('admin.contacts.edit', contact.id);
    },

    redirectToShowContact(contact){
      this.transitionTo('admin.contacts.show', contact.id);
    },

    deleteContact(contact) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        contact.destroyRecord();
      }
    }
  }

});
