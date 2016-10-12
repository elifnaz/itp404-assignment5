import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
   getId: function(){
     var artistId = this.get('artist.id');
     this.transitionToRoute("artists.artist", artistId);
   }
 }
});
