define('itp404/router', ['exports', 'ember', 'itp404/config/environment'], function (exports, _ember, _itp404ConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _itp404ConfigEnvironment['default'].locationType,
    rootURL: _itp404ConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('reddit');
  });

  exports['default'] = Router;
});