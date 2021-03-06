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
      return this.store.findAll('country');
    }
    else {
      var that = this;

      return new Ember.RSVP.Promise(function(resolve) {
        that.store.findAll('country').then(function(countries) {
          resolve(countries.filterBy(params.sortBy, params.search));
        });
      });
    }
  },


  actions: {
    redirectToNewCountry(){
      this.transitionTo('admin.countries.new');
    },

    redirectToEditCountry(country){
      this.transitionTo('admin.countries.edit', country.id);
    },

    redirectToShowCountry(country){
      this.transitionTo('admin.countries.show', country.id);
    },

    deleteCountry(country) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        country.destroyRecord();
      }
    }
  }

});
