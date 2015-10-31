'use strict'

var fs = require('fs')
var cheerio = require('cheerio')
var got = require('got')
var eachAsync = require('each-async')
var trailingLine = require('single-trailing-newline')

var CSSREF = 'http://www.w3schools.com/cssref/'

function build (refUrl, callback) {
  var props = []
  if (!callback) {
    callback = refUrl
    refUrl = CSSREF
  }

  got.get(refUrl, function (err, body) {
    if (err) {
      callback(err)
      return
    }

    var $ = cheerio.load(body)
    var refs = $('div.notranslate').find('a[target="_top"]')
    var len = refs.length
    var refItems = refs.toArray()

    eachAsync(refItems, function (item, index, done) {
      props.push(item.children[0].data)
      done()
    }, function () {
      fs.writeFile('w3c-css-properties.json', trailingLine(JSON.stringify(props)))
    })
  })
}

build()
