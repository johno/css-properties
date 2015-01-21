# css-properties

[![Build Status](https://secure.travis-ci.org/johnotander/css-properties.png?branch=master)](https://travis-ci.org/johnotander/css-properties)

Get list of all available (possible) css properties from scraped directly from W3C website - returns array, have API and CLI

## Installation

```bash
npm install --save css-properties
css-properties --help
```

## Usage

```js
var cssProperties = require('css-properties');

cssProperties([refUrl[,callback]]);
cssProperties();  // => ['background', 'background-attachment', ...]
cssProperties.json();  // => {properties: ['background', 'background-attachment', ...]}


cssProperties(function(err, res) {
  // assert.equal(err, null || undefined);
  // assert(res.length >= 178);
  
  console.log(res)
  // => ['background', 'background-attachment', ...]
});
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
