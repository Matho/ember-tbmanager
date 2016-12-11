import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    selectCountry(itemValueId){
      this.sendAction('onchangeItemValueAction', itemValueId);
    },

  }
});
