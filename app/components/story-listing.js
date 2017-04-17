import Ember from 'ember';

export default Ember.Component.extend({
  init () {
    this._super();
    this.set('isVoteUp', false);
  },
  store: Ember.inject.service(),
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
