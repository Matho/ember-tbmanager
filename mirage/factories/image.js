import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  file_name: faker.lorem.words(),
  file_name_orig_path: faker.lorem.words(),
  file_name_small_path: faker.lorem.words(),
  dimmensions: faker.lorem.words(),

});
