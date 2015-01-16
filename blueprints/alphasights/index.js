var fs = require('fs');
var path = require('path');

module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    // for some reason, binaries lose permissions
    var bin_path = path.join(this.project.root, 'bin');

    fs.readdirSync(bin_path).forEach(function(file) {
      fs.chmodSync(path.join(bin_path, file), '0755')
    });

    return this.addPackageToProject({
      name: "ember-cli-divshot",
      target: "git+https://git@github.com/matteodepalo/ember-cli-divshot.git"
    })
  }
}
