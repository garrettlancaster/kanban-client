import { moduleForModel, test } from 'ember-qunit';

moduleForModel('card-move', 'Unit | Model | card move', {
  // Specify the other units that are required for this test.
  needs: ['model:new-column']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
