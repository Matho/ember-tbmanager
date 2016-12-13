import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(){
    return this.store.findAll('image');

  },


  actions: {
    redirectToCreateImage(){
      this.transitionTo('admin.images.upload');
    },

    redirectToShowImage(image){
      this.transitionTo('admin.images.show', image.id);
    },

    deleteImage(image) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        image.destroyRecord();
      }
    }
  }
});
