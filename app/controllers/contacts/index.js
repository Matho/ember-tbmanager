import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({

  queryParams: ['sortBy', 'sortDir',"page", "perPage"],

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

  // set default values, can cause problems if left out
  // if value matches default, it won't display in the URL
  page: 1,
  perPage: 10,
  // can be called anything, I've called it pagedContent
  // remember to iterate over pagedContent in your template
  pagedContent: pagedArray('sortedContacts', {pageBinding: "page", perPageBinding: "perPage"}),

  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: "pagedContent.totalPages",


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
