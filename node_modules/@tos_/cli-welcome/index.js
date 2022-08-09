#!/usr/bin/env node

/* CLI WELCOME */
const chalk = require('chalk');
const dim = chalk.dim;
const clearConsole = require('clear-any-console');

module.exports = (options = {}) => {
	// options
	const defaultOptions = {
		title: 'ADD A Heading',
		description: '',
		tagLine: '',
		bgColor: '#ffffff',
		color: '#000000',
		bold: true,
		clear: true,
		version: ''
	};
	const opts = {...defaultOptions, ...options};
	const {title, tagLine, description, bgColor, color, bold, clear, version} =
		opts;

	// Configure.
	const bg = bold
		? chalk.hex(bgColor).inverse.bold
		: chalk.hex(bgColor).inverse;
	const clr = bold ? chalk.hex(color).bold : chalk.hex(color);
	clear && clearConsole();

	console.log();
	console.log(
		`${clr(`${bg(`${title}`)}`)} v${version} ${dim(tagLine)} \n ${dim(
			description
		)}`
	);
	console.log();
};
