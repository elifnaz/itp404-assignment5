import Ember from 'ember';

export default Ember.Route.extend({
  model: function(artists){
   var url = 'http://itp-api.herokuapp.com/api/artists/'+ artists.id +'/songs';
   return $.getJSON(url);
 },
});
