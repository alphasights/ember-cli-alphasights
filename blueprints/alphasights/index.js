var fs = require('fs');
var path = require('path');
var glob = require('glob');

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    glob('bin/*', function(er, files) {
      files.forEach(function(el) {
        console.log(el);
        fs.chmodSync(el, '0755')
      })
    });
  }
}
