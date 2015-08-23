export default function(server) {
  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  let board   = server.create('board', {name: 'Task List'});
  let columns = ['To Do', 'Doing', 'Done'].map(function(columnName, index){
    return server.create('kanban_column', {name: columnName, position: index, board_id: board.id});
  });
  let columnIds = columns.map(function(column){ return column.id; });
  board.kanban_column_ids = columnIds;
  let cards = server.createList('kanban_card', 10);
  let index, groupedIds = [];
  let cardIds = cards.map(function(card){ return card.id; });
  let groupSize = 4;
  for (index = 0; index < cardIds.length; index += groupSize) {
    groupedIds.push(cardIds.slice(index, index + groupSize));
  }
  columns.forEach(function(column, index){
    column.card_membership_ids = [];
    groupedIds[index].forEach(function(id){
      let membership = server.create('column_membership', {kanban_card_id: id, kanban_column_id: column.id});
      column.card_membership_ids.push(membership.id);
    });
  });



  // server.createList('contact', 10);
}
