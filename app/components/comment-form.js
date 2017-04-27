import Ember from 'ember';
const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  session: service(),
  store: service(),
  currentUser: service(),

  formText: null,
  formUsername: null,

  actions: {
    save() {
      if (this.get('session.isAuthenticated')) {
        const text = this.get('formText');
        const user = this.get('currentUser.user.username');
        const story = this.get('story');

        const model = this.get('store')
          .createRecord('comment', { story, user, text });

        story.get('comments').pushObject(model);

        model.save().then(() => {
          story.save().then(() => {
            this.set('formText', '');
            this.set('formUsername', '');
            this.attrs.doneSaving();
          });
        });
      } else {
        this.attrs.toLogin();
      }
    }
  }
});
