import Ember from 'ember';
const {
  Component,
  inject: { service }
} = Ember;

export default Component.extend({
  store: service(),
  isVoteUp: false,
  actions: {
    voteAdd(storyItem) {
      const story = this.get('store').peekRecord('story', storyItem.id);
      if (this.get('isVoteUp') === true) {
        story.decrementProperty('votes');
      } else {
        story.incrementProperty('votes');
      }
      story.save().then(() => {
        this.toggleProperty('isVoteUp');
      });
    }
  }
});
