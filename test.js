'use strict';

var assert = require('assert');
var cssProperties = require('./index');

describe('css-properties:', function() {
  it('should return an array of CSS properties when dont have arguments', function(done) {
    assert(cssProperties().length >= 178);
    done();
  });

  it('should return json object when `.json()`', function(done) {
    assert.strictEqual(typeof cssProperties.json(), 'object');
    assert(cssProperties.json().properties.length >= 178);
    done();
  });

  it('should be node style async function when have arguments', function(done) {
    cssProperties(function(err, res) {
      assert.equal(err, null || undefined);
      assert(res.length >= 178);
      done();
    });
  });

  it('should `.api` be node style async function', function(done) {
    cssProperties.api(function(err, res) {
      assert.equal(err, null || undefined);
      assert(res.length >= 178);
      done();
    });
  });

  it('should `.api` throw error for given invalid url', function(done) {
    cssProperties.api('https://djkashdkjashd', function(err, res) {
      assert(err);
      assert(!res);
      done();
    });
  });
});
