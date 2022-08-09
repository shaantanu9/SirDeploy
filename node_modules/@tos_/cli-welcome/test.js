const welcome = require('./index.js');

// Use it.
welcome({
	title: `Welcome CLI`,
	tagLine: `by Tawseef`,
	description: `Create a welcome message for your CLI.`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `1.0`
});
