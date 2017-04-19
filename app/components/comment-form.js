import Ember from 'ember';
const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  store: service(),

  formText: null,
  formUsername: null,

  actions: {
    save() {
      const text = this.get('formText');
      const user = this.get('formUsername');
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
    }
  }
});
