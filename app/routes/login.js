import Ember from 'ember';
import UnauthRMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { Route } = Ember;

export default Route.extend(UnauthRMixin, {
  actions: {
    doneLogin() {
      this.transitionTo('stories');
    }
  }
});
