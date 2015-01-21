'use strict';

var buildProperties = require('./build');
var cssPropertiesJson = require('./w3c-css-properties');

module.exports = function cssProperties(refUrl, callback) {
  if (!callback && !refUrl) {
    return cssPropertiesJson.properties
  }
  return buildProperties(refUrl, callback)
};

module.exports.json = function json() {
  return cssPropertiesJson;
};

module.exports.api = buildProperties;
