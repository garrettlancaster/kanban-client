
import DS from 'ember-data';

let KanbanColumn = DS.Model.extend({
  name: DS.attr('string'),
  board: DS.belongsTo('board', {inverse: 'kanbanColumns'}),
  position: DS.attr('number'),
  cardMemberships: DS.hasMany('column-membership', {embedded: 'always'}),
  cards: Ember.computed('cardMemberships.[]', function(){
    return this.get('cardMemberships').mapBy('kanbanCard');
  })
});

export default KanbanColumn;
