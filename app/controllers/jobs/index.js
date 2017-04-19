import Ember from 'ember';

const {
  Controller,
  computed,
  A,
  $
} = Ember;

export default Controller.extend({
  getModel: computed(function() {
    const jobsids = this.get('model');
    const jobs = A();
    for (const id of jobsids) {
      $.getJSON(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((data) => {
          jobs.pushObject(data);
        });
    }
    return jobs;
  })
});
