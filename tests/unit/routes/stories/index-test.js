import { moduleFor, test } from 'ember-qunit';

moduleFor('route:stories/index', 'Unit | Route | stories/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  const route = this.subject();
  assert.ok(route);
});
