import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  sortedModel: computed('model.@each.votes', function() {
    return this.get('model').sortBy('votes').reverse();
  })
});
