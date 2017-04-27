import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

const {
  Route,
  inject: { service }
} = Ember;

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser().catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    return this.get('currentUser').load();
  }
});
