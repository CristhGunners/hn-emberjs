import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

const {
  Model,
  attr,
  hasMany,
  belongsTo
} = DS;

export default Model.extend({
  title: attr('string'),
  url: attr('string'),
  votes: hasMany('user', { async: true }),
  user: belongsTo('user'),
  comments: hasMany('comment', { async: true }),
  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  }),
  sortedComments: computed('comments', function() {
    return this.get('comments').sortBy('createdAt').reverse();
  })
});
