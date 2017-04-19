import Ember from 'ember';
const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  store: service(),

  formTitle: null,
  formURL: null,
  formUsername: null,

  actions: {
    save() {
      const title = this.get('formTitle');
      const url = this.get('formURL');
      const user = this.get('formUsername');

      const model = this.get('store')
        .createRecord('story', { title, url, user });

      model.save()
        .then(() => {
          this.attrs.doneSaving();
        });
    }
  }
});
