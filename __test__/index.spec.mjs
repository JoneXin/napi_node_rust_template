import test from 'ava';

import { sum, getName } from '../index.js';

test('sum from native', t => {
    t.is(sum(1, 2), 3);
});

getName();
