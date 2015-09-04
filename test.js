'use strict'

var assert = require('assert')
var cssProperties = require('./index')

describe('css-properties', function () {

  it('returns an array of CSS properties', function () {
    assert(cssProperties.length >= 177)
  })

  it('returns an object', function () {
    assert.strictEqual(typeof cssProperties, 'object')
  })
})
