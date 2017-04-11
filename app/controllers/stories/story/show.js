import Ember from 'ember';

export default Ember.Controller.extend({
  newModel: {},
  actions: {
    save(){
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
        story.save(); // Save story
      }); // Save comment
    }
  }
})
