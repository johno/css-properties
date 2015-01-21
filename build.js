'use strict';

var cheerio = require('cheerio');
var got = require('got');
var eachAsync = require('each-async');

var CSSREF = 'http://www.w3schools.com/cssref/';

/**
 * Get list of all available (possible) css properties
 * from scraped directly from W3C website
 *
 * @link http://www.w3schools.com/cssref/
 * @api public
 */
module.exports = function build(refUrl, callback) {
  var props = [];
  if (!callback) {
    callback = refUrl;
    refUrl = CSSREF;
  }

  got.get(refUrl, function(err, body) {
    if (err) {
      callback(err)
      return;
    }
    var $ = cheerio.load(body);
    var refs = $('div.notranslate').find('a[target="_top"]');
    var len = refs.length
    var refItems = refs.toArray();

    eachAsync(refItems, function(item, index, done) {
      props.push(item.children[0].data);
      done();
    }, function() {
      callback(null, props);
    });
  });
};
