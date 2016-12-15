import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contact-validation-errors', 'Integration | Component | contact validation errors', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contact-validation-errors}}`);

  assert.equal(this.$('h3').text().trim(), 'Formulár obsahuje tieto chyby:');

  // Template block usage:
  this.render(hbs`
    {{#contact-validation-errors}}
      template block text
    {{/contact-validation-errors}}
  `);

  assert.equal(this.$('h3').text().trim(), 'Formulár obsahuje tieto chyby:');
});
