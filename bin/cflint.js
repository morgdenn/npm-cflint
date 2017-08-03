#!/usr/bin/env node

const exec = require('child_process').exec;
var findConfig = require('find-config');
var fs = require('fs');
var findJavaHome = require('find-java-home');

// Make sure JAVA is installed.
findJavaHome(function (err, home) {
	if (err) {
		console.log('JAVA not found!');
		return console.log(err);
	}

	// Check for the init arg.
	var initIndex = process.argv.indexOf("-init");
	if (initIndex !== -1) {

		// Get the empty configfile data.
		var cflintrcData = fs.readFileSync(__dirname + '/../.cflintrcNone', 'utf8');

		// Write out the new config file.
		fs.writeFileSync(process.cwd() + '/.cflintrc', cflintrcData);

		console.log(`
			Successfully created .cflintrc file in ${process.cwd()}
			By default there are only parsing errors, all other rules are excluded.
			Run 'cflint -listrulegroups' to see possible rules.
		`)

		// Remove -init, it is not part of the official cflint.
		process.argv.splice(initIndex);

		// Add version just so it wont output the help.
		process.argv.push('-version');
	}

	// If there is no configfile arg, look for the file.
	if (process.argv.indexOf("-configfile") === -1) {

		// Find the path to the nearest config file '.cflintrc'.
		var configFilePath = findConfig('.cflintrc');

		// If there is a config file append it.
		if (configFilePath !== null) {
			process.argv.push('-configfile ' + configFilePath);
			console.log('Using config file: ' + configFilePath);
		}
	}

	// Collect the arguments to resend.
	var userArgs = process.argv.slice(2).join(" ");

	exec('java -jar ' + __dirname + '/CFLint-1.0.1-all.jar ' + userArgs, (error, stdout, stderr) => {
		if (error) {
			console.error('stderr', stderr);
			throw error;
		}

		console.log('stdout', stdout);
	});

});