/* eslint-disable array-callback-return */

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('stories', function() {
    this.route('story', { path: ':story_id' }, function() {
      this.route('show');
    });
    this.route('create');
  });
});

export default Router;
