import Ember from 'ember';

export default Ember.Route.extend({
    model(){
      return this.store.createRecord('country');
    },

    setupController: function (controller, model) {
      this._super(controller, model);

      controller.set('title', 'Create a new country');
    },

    renderTemplate(){
      this.render('admin/countries/form');
    },

  actions: {

    saveCountry(newCountry) {
      newCountry.save().then(() => this.transitionTo('admin.countries'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
