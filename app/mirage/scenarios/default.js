export default function(server) {
  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  let board   = server.create('board', {name: 'Kanban Task Manager'});
  let columns = ['To Do', 'Doing', 'Done'].map(function(columnName, index){
    return server.create('kanban_column', {
      name: columnName,
      position: index,
      board_id: board.id,
      kanban_card_ids: [1,2,3,4].map( (x) => { return x + (index * 4) })
    });
  });

  let columnIds = columns.map(function(column){ return column.id; });
  board.kanban_column_ids = columnIds;

  columns.forEach(function(column){
    server.createList('kanban_card', 4, {kanban_column_id: column.id});
  });
  // let cards = server.createList('kanban_card', 10);



  // let index, groupedCards = [];
  // let groupSize = 4;
  // for (index = 0; index < cards.length; index += groupSize) {
  //   groupedCards.push(cards.slice(index, index + groupSize));
  // }
  // columns.forEach(function(column, index){
  //   groupedCards[index].forEach(function(card){
  //     card.kanban_column_id = column.id;
  //   });
  // });



  // server.createList('contact', 10);
}
