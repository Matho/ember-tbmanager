import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('country');
  },


  actions: {

    redirectToEditCountry(country){
      this.transitionTo('admin.countries.edit', country);
    },

    redirectToShowCountry(country){
      this.transitionTo('admin.countries.show', country);
    },

    deleteCountry(country) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        country.destroyRecord();
      }
    }
  }

});