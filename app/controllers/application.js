import Ember from 'ember';

const {
  Controller,
  inject: { service }
} = Ember;

export default Controller.extend({
  session: service('session'),
  actions: {
    invalidateSession(event) {
      // event.preventDefault();
      this.get('session').invalidate();
    }
  }
});
