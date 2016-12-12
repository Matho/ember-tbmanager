import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts', function() {
    this.route('new');
    this.route('edit', {path: '/:contact_id/edit'});
    this.route('show', {path: '/:contact_id'});
  });

  this.route('admin', function() {
    this.route('countries', function() {
      this.route('new');
      this.route('edit', {path: '/:country_id/edit'} );
      this.route('show', {path: '/:country_id'});
    });
  });

  this.route('images', function() {
    this.route('upload');
    this.route('show', {path: '/:image_id'});

  });
  this.route('login');
  this.route('signup');

  this.route('users', function() {
    this.route('show', {path: '/:user_id'});
  });
  this.route('dashboard');
});

export default Router;
