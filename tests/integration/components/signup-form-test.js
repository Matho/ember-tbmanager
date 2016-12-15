import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('signup-form', 'Integration | Component | signup form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{signup-form}}`);

  assert.equal(this.$('label.password_confirmation').text().trim(), 'Password Confirmation*');

  // Template block usage:
  this.render(hbs`
    {{#signup-form}}
      template block text
    {{/signup-form}}
  `);

  assert.equal(this.$('label.password_confirmation').text().trim(), 'Password Confirmation*');
});
