import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  title() {
    return faker.name.title();
  },
  votes() {
    return faker.random.number();
  },
  url() {
    return faker.internet.url();
  },
  user: association()
});
