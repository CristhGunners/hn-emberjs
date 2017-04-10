import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('story').
      then(stories => stories.sortBy('votes').reverse());
  }
});
