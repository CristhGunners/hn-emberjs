import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return Ember.$.getJSON('https://hacker-news.firebaseio.com/v0/jobstories.json');
  }
});