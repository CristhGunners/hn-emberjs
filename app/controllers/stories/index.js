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
  sortProperties: computed('selectedSort', function() {
    const selected = this.get('selectedSort');
    return (selected ? selected.split(',') : ['votes:desc']);
  }),
  sortedStories: computed.sort('model.stories.data', 'sortProperties')
});
