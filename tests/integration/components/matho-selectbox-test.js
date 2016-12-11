import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('matho-selectbox', 'Integration | Component | matho selectbox', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{matho-selectbox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#matho-selectbox}}
      template block text
    {{/matho-selectbox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
