'use strict';
const test = require('tape');
const sut = require('../');

test('Validate phone numbers', (t) => {
  t.plan(4);
  const correct = sut.validate('98989898', 'phone', true);
  const correctWithPrefix = sut.validate('004798989898', 'phone', true);
  const correctWithPrefixPlus = sut.validate('+4798989898', 'phone', true);
  const incorrect = sut.validate('45666654654654', 'phone', true);
  t.ok(correct, 'Given a valid phone number, validation should be successful');
  t.ok(correctWithPrefix, 'It should handle country codes');
  t.ok(correctWithPrefixPlus, '...event with plus symbol');
  t.notOk(incorrect, 'Given an invalid phone number, validation should not be successful');
});
