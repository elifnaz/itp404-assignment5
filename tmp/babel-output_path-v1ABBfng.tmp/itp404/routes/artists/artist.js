define('itp404/routes/artists/artist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(artists) {
      var url = 'http://itp-api.herokuapp.com/api/artists/' + artists.id + '/songs';
      return $.getJSON(url);
    }
  });
});