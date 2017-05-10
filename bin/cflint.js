#! /usr/bin/env node
var shell = require("shelljs");

var userArgs = process.argv.slice(2).join(" ");

shell.exec('java -jar ' + __dirname + '/CFLint-1.0.1-all.jar ' + userArgs);