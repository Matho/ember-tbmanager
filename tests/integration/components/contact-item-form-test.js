import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contact-item-form', 'Integration | Component | contact item form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contact-item-form}}`);

  assert.equal(this.$('label.surname').text().trim(), 'Surname*');

  // Template block usage:
  this.render(hbs`
    {{#contact-item-form}}
      template block text
    {{/contact-item-form}}
  `);

  assert.equal(this.$('label.surname').text().trim(), 'Surname*');
});
