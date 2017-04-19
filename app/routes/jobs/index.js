import Ember from 'ember';
const {
  Route,
  RSVP,
  $
} = Ember;

function getJob(id) {
  return $.getJSON(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
}

export default Route.extend({
  model() {
    return $.getJSON('https://hacker-news.firebaseio.com/v0/jobstories.json')
      .then((jobIds) => {
        const requests = jobIds.map(getJob);
        return RSVP.Promise.all(requests);
      });
  }
});
