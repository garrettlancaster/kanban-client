import DS from 'ember-data';

let Board = DS.Model.extend({
  name: DS.attr('string'),
  kanbanColumns: DS.hasMany('kanban-column', {async: true})
});

export default Board
