define('itp404/controllers/artists', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      getId: function getId() {
        var artistId = this.get('artist.id');
        this.transitionToRoute("artists.artist", artistId);
      }
    }
  });
});