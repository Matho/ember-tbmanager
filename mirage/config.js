import Mirage from 'ember-cli-mirage';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  this.get('/countries');
  this.post('/countries');
  this.get('/countries/:id');
  this.put('/countries/:id'); // or this.patch
  this.del('/countries/:id');

  this.get('/contacts');
  this.post('/contacts');
  this.get('/contacts/:id');
  this.put('/contacts/:id'); // or this.patch
  this.del('/contacts/:id');

  this.get('/images');
  this.post('/images');
  this.get('/images/:id');
  this.put('/images/:id'); // or this.patch
  this.del('/images/:id');

  this.post('/users/sign_in', (db, request) =>  {
    const req = JSON.parse(request.requestBody);
    const username = Ember.get(req, 'user.email');
    const pw = Ember.get(req, 'user.password');

    if(pw === 'test1234') {
      return new Mirage.Response(201, {}, { token: 'token_value', username: username });
    } else {
      return new Mirage.Response(404, {}, {});
    }
  });

  this.get('/admin/countries', ({ privatePost }, request) => {
    const token = Ember.get(request, 'requestHeaders.Authorization');

    if (token === 'token_value') {
      return country.all();
    } else {
      return new Mirage.Response(401, {}, {});
    }
  });

}
