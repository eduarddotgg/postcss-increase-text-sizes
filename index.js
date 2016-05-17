var postcss = require('postcss');
var units = require('units-css');
var parseCssFont = require('parse-css-font');
var extend = require('util')._extend;

module.exports = postcss.plugin('postcss-increase-text-size', function (opts) {
	opts = extend({
		fontSizeMultiplyBy: 1.2,
		lineheightMultiplyBy: 1.2
	}, opts);
	
	return function(css, result){
		css.walkDecls(function(decl) {
			if (decl.prop === 'font') {
				
				var fontValue = parseCssFont(decl.value);
				var fontSize = units.parse(fontValue.size);
				var lineHeight = fontValue.lineHeight;
				var fontValueCon;
				 
				fontSize = fontSize.value * opts.fontSizeMultiplyBy + fontSize.unit;
				 
				if (lineHeight != 'normal' ){
					var newlineHeight = units.parse(lineHeight)
					newlineHeight = newlineHeight.value * opts.lineheightMultiplyBy + newlineHeight.unit;
					fontValueCon = fontSize + '/' + newlineHeight;
				} else {
					fontValueCon = fontSize
				}
				 
				decl.value = decl.value.replace(/(\d\S*)(\d+)?/g, fontValueCon)
			}
			
			if (decl.prop === 'font-size'){
				var propUnit = units.parse(decl.value);
				propUnit.value = propUnit.value * opts.fontSizeMultiplyBy;
				decl.value = propUnit.value + propUnit.unit;
			}
			
			if (decl.prop === 'line-height'){
				var propUnit = units.parse(decl.value);
				propUnit.value = propUnit.value * opts.lineheightMultiplyBy;
				decl.value = propUnit.value + propUnit.unit;
			}
		});
	}
});