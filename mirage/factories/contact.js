import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.lorem.words(),
  surname: faker.lorem.words(),
  phone: faker.lorem.words(),
  email: faker.lorem.words(),
  web: faker.lorem.words(),
  city: faker.lorem.words(),
  address: faker.lorem.words(),

});
