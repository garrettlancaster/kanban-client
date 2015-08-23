import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('board', {path: ''}, function(){
    this.resource('kanban-columns', {path: ''});
  });
});

export default Router;
