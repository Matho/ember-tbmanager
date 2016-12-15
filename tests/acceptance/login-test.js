import { test } from 'qunit';
import moduleForAcceptance from 'tbmanager/tests/helpers/module-for-acceptance';
import Ember from 'ember';

// These test helps are included with ESA, and
// are absolutely critical for sane testing.
import {
  currentSession,
  invalidateSession ,
  authenticateSession
} from 'tbmanager/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | login form');


test('If a user is not logged in, they see a login form', function(assert) {
  invalidateSession(this.application);
  visit('/dashboard');

  andThen(function() {
    const loginFormPresent = find('#loginForm').length > 0 ? true : false;
    assert.equal(loginFormPresent, true);
  });
});

test('if a user is logged in, they see a logout link', function(assert) {
  authenticateSession(this.application);
  visit('/dashboard');

  andThen(function() {
    assert.equal(currentURL(), '/dashboard');
    const logoutBtnPresent = Ember.$('.logoutLink').length > 0 ? true : false;
    assert.equal(
      logoutBtnPresent,
      true,
      'An authed user should see the logout link'
    );

    const loginFormPresent = find('#loginForm').length > 0 ? true : false;
    assert.equal(
      loginFormPresent,
      false,
      'An authed user not should see the login form'
    );
  });
});

test('user can logout', function(assert) {
  authenticateSession(this.application);
  visit('/dashboard');
  click('.logoutLink');

  andThen(() => {
    const sesh = currentSession(this.application);
    const isAuthed = Ember.get(sesh, 'isAuthenticated');
    assert.equal(
      isAuthed,
      false,
      'After clicking logout, the user is no longer logged in'
    );

  });
});

test('user can login', function(assert) {
  invalidateSession(this.application);
  visit('/login');

  fillIn('.username-field', 'lester@test.com');
  fillIn('.password-field', 'test1234');
  click('.login-btn');

  andThen(() => {
    const sesh = currentSession(this.application);

    const isAuthed = Ember.get(sesh, 'isAuthenticated');


    assert.equal(
      isAuthed,
      true,
      'after a user submits good creds to login form, they are logged in'
    );
/*
    const loginFormPresent = find('#loginForm').length > 0 ? true : false;
    assert.equal(
      loginFormPresent,
      false,
      'after we login, the login form disappears'
    )*/
  });
});

test('If a user puts in the wrong login credentials, they see a login error', function(assert) {
  invalidateSession(this.application);
  visit('/login');

  fillIn('.username-field', 'lester@test.com');
  fillIn('.password-field', 'wrongPassword');
  click('.login-btn');

  andThen(() => {
    const sesh = currentSession(this.application);
    const isAuthed = Ember.get(sesh, 'isAuthenticated');
    assert.equal(
      isAuthed,
      false,
      'User submits bad username and password, fails'
    );

    const isShowingLoginFails = find('.validationErrors').length > 0 ? true : false;
    assert.equal(
      isShowingLoginFails,
      true,
      'Shows user an error when they put in bad deets'
    );

    const loginFormPresent = find('#loginForm').length > 0 ? true : false;
    assert.equal(
      loginFormPresent,
      true,
      'and we can still see the login form'
    );
  });
});
