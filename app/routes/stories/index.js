import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model() {
    return this.get('store').findAll('story')
      .then((stories) => stories.sortBy('votes').reverse());
  }
});
