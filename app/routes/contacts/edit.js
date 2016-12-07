import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('contact', params.contact_id);
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit a new country');
  },

  renderTemplate() {
    this.render('admin/countries/form');
  },

});
