'use strict';
const test = require('tape');
const sut = require('../');

test('Validate regex', (t) => {
  t.plan(1);
  const correct = sut.validate('my-us3r_n4m3', '[a-z0-9_-]{3,16}', true);
  t.ok(correct, 'Given a regex as validation rule, validation should be successful when the value is correct');
});
