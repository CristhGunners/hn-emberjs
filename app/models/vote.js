import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  state: DS.attr('boolean', { defaultValue: false })
});
