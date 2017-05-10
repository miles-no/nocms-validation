'use strict';
const test = require('tape');
const sut = require('../');

test('Validate not empty', (t) => {
  t.plan(3);
  const correct = sut.validate('', 'notEmpty', true);
  const noRule = sut.validate('', '', true);
  const valid = sut.validate('abc', 'notEmpty', true);
  t.notOk(correct, 'If a required value is empty, validation should fail');
  t.notOk(noRule, 'The same goes for required values without a specified validation rule');
  t.ok(valid, 'Should accept strings with content');
});

test('Validate not empty array', (t) => {
  t.plan(3);
  const correct = sut.validate([], 'notEmpty', true);
  const noRule = sut.validate([]);
  const valid = sut.validate([1], 'notEmpty', true);
  t.notOk(correct, 'If a required value is an empty array, validation should fail');
  t.notOk(noRule, 'The same goes for required array value without a specified validation rule');
  t.ok(valid, 'Should accept arrays with content');
});
