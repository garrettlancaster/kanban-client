import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    // hard-coded for now, but will handle mutltiple boards in the future
    return this.store.find('board', 1);
  },

  actions: {
    moveCard: function(options) {
      let move = this.store.createRecord('card-move', options);
      move.save();
    }
  }
});
