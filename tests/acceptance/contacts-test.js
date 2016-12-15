import { test } from 'qunit';
import moduleForAcceptance from 'tbmanager/tests/helpers/module-for-acceptance';
import {
  invalidateSession ,
  authenticateSession
} from 'tbmanager/tests/helpers/ember-simple-auth';


moduleForAcceptance('Acceptance | contacts');

test('visiting /admin/contacts', function(assert) {
  authenticateSession(this.application);
  server.createList('contact', 5);

  visit('/admin/contacts');


  andThen(function() {
    // We're saying that the css class
    // `.public-post` would be used on a
    // display container for any public posts,
    // and based on our `server.createList`,
    // we exepct there should be 5
    assert.equal(
      find('table.contacts tbody tr').length,
      5,
      'We can see all contacts on /admin/contacts'
    );
  });
});

test('see no contacts when not authed', function(assert) {
  server.createList('contact', 5);
  invalidateSession(this.application);

  visit('/admin/contacts');
  andThen(() => {
    assert.equal(
      find('table.contacts tbody tr').length,
      0,
      'we can\'t see any contacts when we are not logged in'
    );
  });
});
