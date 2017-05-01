import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  sortOptions: [
    { id: 'votes.length:desc', name: 'More Votes' },
    { id: 'sortedComments:desc', name: 'More Comments' },
    { id: 'createdAt:desc', name: 'News' }
  ],
  selectedSort: 'votes.length:desc',
  sortProperties: computed('selectedSort', function() {
    const selected = this.get('selectedSort');
    return (selected ? selected.split(',') : ['votes.length:desc']);
  }),
  sortedStories: computed.sort('model', 'sortProperties')
});
