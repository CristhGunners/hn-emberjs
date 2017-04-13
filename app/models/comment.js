import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  story: belongsTo('story'),
  user: attr('string'),
  text: attr('string'),
  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  })
});
