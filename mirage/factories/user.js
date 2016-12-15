import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.lorem.words(),
  email: faker.lorem.words(),
  password: faker.lorem.words(),
  passwordConfirmation: faker.lorem.words(),
  authenticationToken: faker.lorem.paragraphs(),

});
