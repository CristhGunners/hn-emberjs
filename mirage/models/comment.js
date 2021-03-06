import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  story: belongsTo('story'),
  user: belongsTo('user')
});
