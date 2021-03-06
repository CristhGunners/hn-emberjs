import Ember from 'ember';
const {
  Route,
  $
} = Ember;

export default Route.extend({
  model(params) {
    return this.store.findRecord('story', params.story_id);
  },
  actions: {
    doneSaving() {
      $('html, body').animate({ scrollTop: 0 }, 1000);
    },
    toLogin() {
      this.transitionTo('login');
    }
  }
});
