import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('contact')
  },


  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new contact');;
  },

  renderTemplate() {
    this.render('contacts/form');
  },


});
