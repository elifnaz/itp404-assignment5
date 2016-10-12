QUnit.module('JSHint | routes/artists/artist.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/artists/artist.js should pass jshint.\nroutes/artists/artist.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/artists/artist.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
});
