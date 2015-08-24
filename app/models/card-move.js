import DS from 'ember-data';

export default DS.Model.extend({
  kanbanCardId: DS.attr('number'),
  newIndex: DS.attr('number'),
  newColumnId: DS.attr('number')
});
