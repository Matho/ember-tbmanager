import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin,{
  model(params){
    return Ember.RSVP.hash({
      contact: this.get('store').findRecord('contact', params.contact_id),
      countries: this.store.findAll('country')
    });
  },
});
