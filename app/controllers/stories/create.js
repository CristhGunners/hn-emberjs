import Ember from 'ember';
const { Controller } = Ember;

export default Controller.extend({
  newModel: {},
  actions: {
    save() {
      const model = this.store.createRecord('story', this.get('newModel'));
      this.set('newModel', {});
      model.save().then(() => {
        this.transitionToRoute('stories');
      });
    }
  }
});
