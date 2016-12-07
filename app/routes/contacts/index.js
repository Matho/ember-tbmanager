import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('contact');
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new country');
  },

  renderTemplate() {
    this.render('admin/countries/form');
  },

});
