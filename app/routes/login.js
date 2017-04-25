import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  actions: {
    doneLogin() {
      this.transitionTo('stories');
    }
  }
});
