
var request = require('nep-request');

module.exports = function(callback, file) {
    request({
        url: file
    }, function(err, buffer, proxyRes){
        callback(err, buffer);
    });
};