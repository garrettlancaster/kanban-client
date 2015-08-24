import Ember from 'ember';
import { draggable } from '../utils/drag-and-drop'

export default Ember.Component.extend({
  classNames: 'KanbanBoard',

  _droppableContainerClass: '.KanbanColumn-cards',

  _setupDragAndDrop: Ember.on('didInsertElement', function(){
    let containers      = this.$().find(this.get('_droppableContainerClass')).toArray();
    let dragDropManager = draggable(containers)

    dragDropManager.on('drop', this._handleCardMove.bind(this))
  }),

  _handleCardMove: function(cardEl, endColumn, startColumn){
    let $card       = $(cardEl);
    let $endColumn  = $card.closest(this.get('_droppableContainerClass'));

    this.sendAction('moveCard', {
      kanbanCardId: $card.attr('data-id'),
      newColumnId: $endColumn.attr('data-id'),
      newIndex: $endColumn.children().index($card)
    });
  }

});
