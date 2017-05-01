import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  comments: hasMany('comment'),
  votes: hasMany('user'),
  user: belongsTo('user')
});
