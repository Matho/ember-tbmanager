# tbmanager

This is my first ember application created for learning purpose.   

## Features
* CRUD contacts
* CRUD images
* CRUD countries
* file uploading (html5 runtime)
* login
* user registration
* powered by ruby on rails api
* form realtime validation
* searching (local mode)
* pagination (local mode)
* sortable tables (local mode)
* screenshots of app in screenshots folder
* acceptance tests via mirage

## Bugs
* problems with selectbox in contacts

## Thanks to 
App was built with this tutorials. Thank you, guys!
* http://ryanlabouve.com/ember-blog-with-jwt-and-esa/
* http://ryanlabouve.com/ember-blog-with-jwt-and-esa-2/
* http://yoember.com/#lesson-1
* https://docs.npmjs.com/getting-started/installing-npm-packages-locally
* https://docs.npmjs.com/getting-started/fixing-npm-permissions#option-2-change-npms-default-directory-to-another-directory
* https://balinterdi.com/2015/08/29/how-to-do-a-select-dropdown-in-ember-20.html
* http://www.thegreatcodeadventure.com/building-user-registration-with-ember-simple-auth/
* https://emberigniter.com/modern-bridge-ember-and-rails-5-with-json-api/



## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd tbmanager`
* `npm install`
* `bower install`

## Running / Development

* ember server --proxy http://localhost:3000
* bin/rails server --binding 0.0.0.0 (ruby on rails api project)
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
