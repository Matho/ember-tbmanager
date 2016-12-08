import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: "Save contact",

  actions: {

    buttonClicked(param) {
      this.sendAction('action', param);
    }

  }
});
