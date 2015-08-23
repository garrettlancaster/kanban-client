import { moduleForModel, test } from 'ember-qunit';

moduleForModel('column-membership', 'Unit | Model | column membership', {
  // Specify the other units that are required for this test.
  needs: ['model:kanban-column', 'model:kanban-card']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
