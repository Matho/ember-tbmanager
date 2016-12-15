import { test } from 'qunit';
import moduleForAcceptance from 'tbmanager/tests/helpers/module-for-acceptance';
import {
  invalidateSession ,
  authenticateSession
} from 'tbmanager/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | countries');

test('visiting /admin/countries', function(assert) {
  authenticateSession(this.application);
  server.createList('country', 5);

  visit('/admin/countries');


  andThen(function() {
    // We're saying that the css class
    // `.public-post` would be used on a
    // display container for any public posts,
    // and based on our `server.createList`,
    // we exepct there should be 5
    assert.equal(
      find('table.countries tbody tr').length,
      5,
      'We can see all countries on /countries'
    );
  });
});

test('see no countries when not authed', function(assert) {
  server.createList('country', 5);
  invalidateSession(this.application);

  visit('/admin/countries');
  andThen(() => {
    assert.equal(
      find('table.countries tbody tr').length,
      0,
      'we can\'t see any countries when we are not logged in'
    );
  });
});
