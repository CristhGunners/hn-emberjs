import DS from 'ember-data';

export default DS.Model.extend({
  story: DS.belongsTo('story'),
  user: DS.attr(),
  text: DS.attr(),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
