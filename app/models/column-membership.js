import DS from 'ember-data';

export default DS.Model.extend({
  kanbanColumn: DS.belongsTo('kanban-column'),
  kanbanCard: DS.belongsTo('kanban-card', {async: true})
});
