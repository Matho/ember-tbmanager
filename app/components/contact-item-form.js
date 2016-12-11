import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: "Save contact",


  actions: {

    buttonClicked(param) {
      this.sendAction('action', param);
    },

    selectCountry(countryId){
      console.log('countryId' + countryId);
      this.sendAction('onchangeCountryAction', countryId);
    },

  }
});
