#!/usr/bin/node
const fs = require('fs');

fs.readfile(process.argv[2], 'utf8', (err, data) => {
	if (err) {
		return console.log(err);
	}
	process.stdout.write(data);
});
