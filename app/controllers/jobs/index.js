import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  getModel: computed(function() {
    const jobsids = this.get('model');
    const jobs = Ember.A();
    for (const id of jobsids) {
      Ember.$.getJSON('https://hacker-news.firebaseio.com/v0/item/' + id + '.json').then(function(data) {
        jobs.pushObject(data);
      });
    }
    return jobs;
  })
});
