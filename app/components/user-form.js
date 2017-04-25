import Ember from 'ember';
const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  store: service(),

  formUsername: null,
  formEmail: null,
  formPassword: null,

  actions: {
    save() {
      const username = this.get('formUsername');
      const email = this.get('formEmail');
      const password = this.get('formPassword');

      const model = this.get('store')
        .createRecord('user', { username, email, password });

      model.save()
        .then(() => {
          this.attrs.doneSaving();
        });
    },
    authenticate() {
      const username = this.get('formUsername');
      const password = this.get('formPassword');
      // request to authenticate
      this.attrs.doneLogin();
    }
  }
});
