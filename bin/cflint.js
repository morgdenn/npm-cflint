#! /usr/bin/env node
var shell = require("shelljs");
var findConfig = require('find-config');

// Check for the init arg.
var initIndex = process.argv.indexOf("-init");
if (initIndex !== -1) {

	var fs = require('fs');

	// Remove -init, it is not part of the official cflint.
	process.argv.splice(initIndex);

	// Add version just so it wont output the help.
	process.argv.push('-version');

	// Get the empty configfile data.
	var cflintrcData = fs.readFileSync(__dirname + '/../.cflintrc', 'utf8');

	fs.writeFileSync(process.cwd() + '/.cflintrc', cflintrcData);

	console.log(`
		Successfully created .cflintrc file in ${process.cwd()}
		By default there are only parsing errors, all other rules are excluded.
		Run 'cflint -listrulegroups' to see possible rules.
	`)
}

// Collect the arguments to resend.
var userArgs = process.argv.slice(2).join(" ");

// Find the path to the nearest config file '.cflintrc'.
var configFilePath = findConfig('.cflintrc');

// If there is a config file append it.
if (configFilePath) {
	userArgs += ' -configfile ' + configFilePath
}

// Execute cflint.
shell.exec('java -jar ' + __dirname + '/CFLint-1.0.1-all.jar ' + userArgs);