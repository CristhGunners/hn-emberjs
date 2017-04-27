import AuthRMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

import Ember from 'ember';
const { Route } = Ember;

export default Route.extend(AuthRMixin, {
  actions: {
    doneSaving() {
      this.transitionTo('stories');
    }
  }
});
