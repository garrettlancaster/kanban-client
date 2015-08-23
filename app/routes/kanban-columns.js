import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    let board = this.modelFor('board');
    return board.get('kanbanColumns');
  }
});
