var sandbox = require('sandboxed-module');
var Backbone = require('backbone');

module.exports = sandbox.require('../../models/song.js', {
  requires: { 
    request:  require('../mocks/request.js'),
    backbone: Backbone
  }
});