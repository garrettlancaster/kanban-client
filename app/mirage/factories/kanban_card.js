import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: function(i) {
    return '['+(i + 1)+'] ' + faker.company.bs();
  },

  position: function(i){
    return i + 1;
  }
});
