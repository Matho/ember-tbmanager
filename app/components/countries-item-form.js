import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: "Save country",

  actions: {

    buttonClicked(param) {
      this.sendAction('action', param);
    }

  }
});
