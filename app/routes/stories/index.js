import Ember from 'ember';
const {
  Route,
  RSVP,
  $
} = Ember;

export default Route.extend({
  model() {
    return RSVP.hash({
      stories: $.getJSON('/api/v1/stories')
    });
  }
});
