import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  url: DS.attr(),
  votes: DS.attr('number'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
