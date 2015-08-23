import { moduleForModel, test } from 'ember-qunit';

moduleForModel('kanban-column', 'Unit | Model | kanban column', {
  // Specify the other units that are required for this test.
  needs: ['model:board']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
