import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('image');

  },


  actions: {
    redirectToShowImage(image){
      this.transitionTo('images.show', image.id);
    },

    deleteImage(image) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        image.destroyRecord();
      }
    }
  }
});
