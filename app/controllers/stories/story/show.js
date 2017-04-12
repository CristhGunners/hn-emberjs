import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {}, // Comment Model Empty
  actions: {
    save(){ // Save New Comment
      let commentData = this.get("newModel"); // Form Data
      let story = this.get('store').peekRecord('story', this.get("model").id); // Story Object
      let comment = this.get('store').createRecord('comment', {
        text: commentData.text,
        user: commentData.user,
        story: story
      }); // Create Comment
      story.get('comments').pushObject(comment); // Set Comment in Story
      this.set("newModel", {}) // Set Empty newModel
      comment.save().then(function () {
        story.save().then(function () {
          Ember.$("html, body").animate({scrollTop: 0}, 1000); // Back to Top of Page
        }); // Save story
      }); // Save comment
    }
  }
})
