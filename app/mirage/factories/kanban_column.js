import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: function(i) {
    return 'Column ' + i;
  }
});
