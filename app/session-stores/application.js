import LocalStorageStore from 'ember-simple-auth/session-stores/local-storage';

export default LocalStorageStore.extend({
  key: 'io.blimp.hn-clone.session'
});
