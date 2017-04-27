import Ember from 'ember';
const {
  Component,
  inject: { service }
} = Ember;

function getError(error) {
  // TODO:
  // use lodash/get to get the data or default message
  // get(error, 'errors.0.detail', 'Default error message');
  return error.errors[0].detail;
}

export default Component.extend({
  store: service(),
  session: service(),

  formUsername: null,
  formEmail: null,
  formPassword: null,

  actions: {
    save() {
      const username = this.get('formUsername');
      const email = this.get('formEmail');
      const password = this.get('formPassword');

      const newUser = this.get('store')
        .createRecord('user', { username, email, password });

      return newUser.save()
        .then((user) => {
          return this.get('session')
            .authenticate('authenticator:blimp', username, password)
            .then(() => {
              this.set('formPassword', null);
              this.attrs.doneSaving();
            });
        })
        .catch((error) => {
          newUser.deleteRecord();
          // TODO: Display a pretty error in UI
          console.log('ERROR:', error);
          if (error) {
            alert(`Error: ${getError(error)}`);
          }
        });
    },
    authenticate() {
      const username = this.get('formUsername');
      const password = this.get('formPassword');
      this.get('session')
        .authenticate('authenticator:blimp', username, password)
        .then(() => {
          this.set('formPassword', null);
          this.attrs.doneLogin();
        })
        .catch((error) => {
          // TODO: Display a pretty error in UI
          console.log('ERROR:', error);
          if (error) {
            alert(`Error: ${getError(error)}`);
          }
        });
    }
  }
});
