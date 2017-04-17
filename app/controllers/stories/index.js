import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  sortOptions: [
    { id: 'votes:desc', name: 'More Votes' },
    { id: 'sortedComments:desc', name: 'More Comments' },
    { id: 'createdAt:desc', name: 'News' }
  ],
  selectedSort: 'votes:desc',
  sortProperties: Ember.computed('selectedSort', function() {
    let selected = this.get('selectedSort');
    return (selected ? selected.split(',') : ['votes:desc']);
  }),
  sortedStories: computed.sort('model', 'sortProperties')
});
