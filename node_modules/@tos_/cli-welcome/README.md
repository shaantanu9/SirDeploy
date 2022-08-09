# cli-welcome
Welcome  customised header for Node.js CLI software

<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm install @tos_/cli-welcome
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

```js
const welcome = require('@tos_/cli-welcome');

// Use it.
welcome({title: `Welcome CLI`, tagLine: `by Tawseef Ahmad`});

// OR with all the options set like this:
welcome({
	title: `Welcome CLI`,
	tagLine: `by Tawseef Ahmad`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `v1.0`
});
```
<br>

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/options.png)](./../../)

## API

### welcome(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

#### ❯ title

Type: `string`

CLI title with background color highlight.

#### ❯ tagLine

Type: `string`

CLI tag line in front of the title without highlight but dimmed.

#### ❯ description

Type: `string`

CLI description below the title.

#### clear

Type: `boolean`<br>
Default: `true`

Clear console.

#### bold

Type: `boolean`<br>
Default: `true`

Bold heading text.

#### bgColor

Type: `string`<br>
Default: `#ffffff`

Background color highlight for `heading`.

#### color

Type: `string`<br>
Default: `true`

Text color for `heading`.

#### version

Type: `string`<br>
Default: `(empty string)`

Print version text.

<br>

## Connect

<div align="left">
    <p><a href="https://github.com/tawseefnabi/"><img alt="GitHub @tawseefnabi" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To stay up to date on free & open-source software</small></p>
    <p><a href="https://twitter.com/NabiTowseef/"><img alt="Twitter @NabiTowseef" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To get tech updates/small></p>
    <p><a href="https://www.linkedin.com/in/tawseef-ahmad-bhat-61830385/"><img alt="LinkedIn @TawseefAhmad" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>

<br>


[n]: https://nodecli.com/?utm_source=FOSS&utm_medium=FOSS&utm_campaign=create-node-app
[repo]: https://github.com/AhmadAwais/create-node-app
