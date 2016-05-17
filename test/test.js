import postcss from 'postcss';
import test from 'ava';

import plugin from '../';

function run(t, input, output) {
	return postcss([plugin({
		fontSizeMultiplyBy: 1.2,
		lineheightMultiplyBy: 1.2
	})]).process(input)
		.then(result => {
			t.same(result.css, output);
			t.same(result.warnings().length, 0);
		});
}

test('Font size or line height doesn\'t match', t => {
	return run(
		t,
		`body {
			font-size: 12px;
			line-height: 16px;
		}`,
		`body {
			font-size: 14.4px;
			line-height: 19.2px;
		}`
	);
});