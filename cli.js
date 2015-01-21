#!/usr/bin/env node

'use strict';

var fs = require('fs');
var buildProperties = require('./build');
var cssProperties = require('./index');
var args = process.argv.slice(2);

if (args.indexOf('--build') !== -1) {
  buildProperties(function(err, props) {
    props = JSON.stringify(props, null, 4);
    var template = '{\n  "___AUTO_GENERATED___": "' + (new Date()) + '",\n';
    template += '  "properties": ' + props.replace(/\]$/, '  ]') + '\n}';
    fs.writeFileSync('./w3c-css-properties.json', template);
    console.log('Update/build complete successfully! :)');
    process.exit(0);
  });
}

if (args.indexOf('--help') !== -1) {
  console.log([
    'Options:',
    '  --help         Show this help',
    '  --version      Current version of package',
    '  --build        Update/build json list of css properties',
    '',
    'Usage:',
    '  $ css-properties',
    '  align-content',
    '  align-items',
    '  align-self',
    '  animation',
    '  animation-delay',
    '  animation-direction',
    '  animation-duration',
    '  ...',
    '',
    '  $ css-properties --build',
    '  Update/build complete successfully! :)',
    ''
  ].join('\n'));
  process.exit(0);
}

if (args.indexOf('--version') !== -1) {
  console.log(require('./package.json').version);
  process.exit(0);
}


if (!args.length) {
  console.log(cssProperties().join('\n'));
  process.exit(0);
}
