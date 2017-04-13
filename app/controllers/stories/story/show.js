import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {}, // Comment Model Empty
  actions: {
    save() { // Save New Comment
      const commentData = this.get('newModel'); // Form Data
      // Story Object
      const story = this.get('store').peekRecord('story', this.get('model').id);
      const comment = this.get('store').createRecord('comment', {
        text: commentData.text,
        user: commentData.user,
        story: story
      }); // Create Comment
      story.get('comments').pushObject(comment); // Set Comment in Story
      this.set('newModel', {}); // Set Empty newModel
      comment.save().then(() => {
        story.save().then(() => {
          // Back to Top of Page
          Ember.$('html, body').animate({ scrollTop: 0 }, 1000);
        }); // Save story
      }); // Save comment
    }
  }
});
