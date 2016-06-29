'use strict';
const test = require('tape');
const sut = require('../');

test('Validate not empty', (t) => {
  t.plan(2);
  const correct = sut.validate('', 'notEmpty', true);
  const noRule = sut.validate('', '', true);
  t.notOk(correct, 'If a required value is empty, validation should fail');
  t.notOk(noRule, 'The same goes for required values without a specified validation rule');
});
