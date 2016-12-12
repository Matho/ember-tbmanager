import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      contact: this.get('store').findRecord('contact', params.contact_id),
      countries: this.store.findAll('country')
    });
  },
});
