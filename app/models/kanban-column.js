
import DS from 'ember-data';

let KanbanColumn = DS.Model.extend({
  name: DS.attr('string'),
  board: DS.belongsTo('board', {inverse: 'kanbanColumns'}),
  position: DS.attr('number'),
  kanbanCards: DS.hasMany('kanban-card', {async: true}),
  sortedKanbanCards: Ember.computed('kanbanCards.@each.position', function(){
    return this.get('kanbanCards').sortBy('position');
  })
});

export default KanbanColumn;
