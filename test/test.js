import postcss from 'postcss';
import test from 'ava';

import plugin from '../';

function run(t, input, output) {
	return postcss([plugin({
		fontSizeMultiplyBy: 1.2,
		lineheightMultiplyBy: 1.2,
		selectorsBlackList: ['h2']
	})]).process(input)
		.then(result => {
			t.is(result.css, output);
			t.is(result.warnings().length, 0);
		});
}

test('Font size or line height doesn\'t match', t => {
	return run(
		t,
		`h2 {
			font-size: 12px;
		}
		body {
			font-size: 12px;
			line-height: 16px;
		}`,
		`h2 {
			font-size: 12px;
		}
		body {
			font-size: 14px;
			line-height: 19px;
		}`
	);
});
