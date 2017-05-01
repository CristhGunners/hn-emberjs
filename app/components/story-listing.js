import Ember from 'ember';
const {
  Component,
  computed,
  inject: { service }
} = Ember;

export default Component.extend({
  session: service(),
  store: service(),
  currentUser: service(),
  isVote: computed(function() {
    const user = this.get('currentUser.user');
    const story = this.get('story');
    const isVote = story.get('votes').includes(user);
    return isVote ? true : false;
  }),
  actions: {
    voteAdd(storyItem) {
      if (this.get('session.isAuthenticated')) {
        const story = this.get('store').peekRecord('story', storyItem.id);
        const user = this.get('currentUser.user');
        const isVote = story.get('votes').includes(user);
        if (isVote) {
          story.get('votes').removeObject(user);
        } else {
          story.get('votes').pushObject(user);
        }
        story.save().then(() => {
          this.toggleProperty('isVote');
        });
      } else {
        this.attrs.toLogin();
      }
    }
  }
});
