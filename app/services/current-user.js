import Ember from 'ember';

const {
  Service,
  inject: { service }
} = Ember;

export default Service.extend({
  session: service(),
  store: service(),

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { me: true })
        .then((user) => {
          this.set('user', user);
        });
    }
  }
});
