[![Build Status](https://travis-ci.org/admdh/postcss-increase-text-sizes.svg?branch=master)](https://travis-ci.org/admdh/postcss-increase-text-sizes)
# PostCSS Increase Text Size
<img align="right" width="57" height="108" title="Dev Kit Main Logo" src="http://adm-designhouse.com/dev-kit-logo.png">

<img align="right" width="108" height="108" title="Philosopher’s stone, logo of PostCSS" src="http://postcss.github.io/postcss/logo.svg" hspace="20">
PostCSS Increase Text Size is a PostCSS plugin that helps automaticaly increase text size and line heights.

## Why?
Accessible websites are getting more popular. Some countries even pass laws obliging IT companies create web accessible websites. This plugin focused to help with building web accessible web sites.

<img title="Increase Text Size Example" src="img/increase-text-size-example.png">


## Basic Usage
```js
postcss([
	require('postcss-increase-text-size')({
		fontSizeMultiplyBy: 1.2,
		lineheightMultiplyBy: 1.2
	})
]);
```
input.css:
```css
p{
	font-size: 12px;
	line-height: 16px;
}
```
output.css:
```css
p{
	font-size: 14px;
	line-height: 19px;
}
```


## Options
| Name                              | Default Value   | Description    |
|:----------------------------------|:----------------|:---------------|
| `fontSizeMultiplyBy`              | `1.2`           | All ```font-size``` properties will be multiplied by this option |
| `lineheightMultiplyBy`            | `1.2`           | All ```line-height``` properties will be multiplied by this option |


## Works great with: 
[PostCSS High Contrast] https://github.com/admdh/postcss-high-contrast
