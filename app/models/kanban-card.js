import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  kanbanColumn: DS.belongsTo('kanban-column'),
  position: DS.attr('number')
});
