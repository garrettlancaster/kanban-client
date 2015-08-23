import { moduleForModel, test } from 'ember-qunit';

moduleForModel('kanban-card', 'Unit | Model | kanban card', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
