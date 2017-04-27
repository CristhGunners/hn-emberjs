import ARMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend(ARMixin, {
  currentUser: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },

  sessionInvalidated() {
    // Here just to prevent a reload after logout
    // Remove if we want a reload after logout to:
    // "clear all potentially sensitive data from memory"
    this.transitionTo('stories');
  },

  _loadCurrentUser() {
    return this.get('currentUser').load();
  }
});
