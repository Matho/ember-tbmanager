import Ember from 'ember';

export default Ember.Route.extend({
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
