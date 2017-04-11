import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  votes: DS.attr('number', { defaultValue: 0 }),
  user: DS.attr('string'),
  comments: DS.hasMany('comment', {async: true}),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
