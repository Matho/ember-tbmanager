import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['sortBy', 'sortDir'],

  numberOfRecords: 100,

  // Using for sortBy direction
  id: false,
  name: false,
  surname: false,
  phone: false,
  email: false,
  web: false,
  city: false,
  address: false,

  // Default sorting
  sortBy: 'id',
  sortDir: 'asc',

  sortProperties: Ember.computed('sortBy', 'sortDir', function() {
    return [`${this.get('sortBy')}:${this.get('sortDir')}`];
  }),

  sortedContacts: Ember.computed.sort('model', 'sortProperties'),


  actions: {

// Called when the table header clicked
    sortBy(prop) {

      // Change the boolean, we use this value for returning desc or asc
      this.toggleProperty(prop);
      let direction = this.get(prop) ? 'desc' : 'asc';

      this.set('sortBy', prop);
      this.set('sortDir', direction);
    },

  }
});
