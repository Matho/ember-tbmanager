import { test } from 'qunit';
import moduleForAcceptance from 'tbmanager/tests/helpers/module-for-acceptance';
import {
  invalidateSession ,
  authenticateSession
} from 'tbmanager/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | images');

test('visiting /admin/images', function(assert) {
  authenticateSession(this.application);
  server.createList('image', 5);

  visit('/admin/images');


  andThen(function() {
    // We're saying that the css class
    // `.public-post` would be used on a
    // display container for any public posts,
    // and based on our `server.createList`,
    // we exepct there should be 5
    assert.equal(
      find('table.images tbody tr').length,
      5,
      'We can see all images on /admin/images'
    );
  });
});

test('see no images when not authed', function(assert) {
  server.createList('image', 5);
  invalidateSession(this.application);

  visit('/admin/images');
  andThen(() => {
    assert.equal(
      find('table.images tbody tr').length,
      0,
      'we can\'t see any images when we are not logged in'
    );
  });
});
