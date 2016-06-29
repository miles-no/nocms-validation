'use strict';
const test = require('tape');
const sut = require('../');

test('Validate account numbers', (t) => {
  t.plan(3);
  const correct = sut.validate('63450711014', 'accountNumber', true);
  const incorrect = sut.validate('-1', 'accountNumber', true);
  const nullValue = sut.validate(null, 'accountNumber', true);
  t.ok(correct, 'Given a valid account number, validation should be successful');
  t.notOk(incorrect, 'Given an invalid account number, validation should not be successful');
  t.notOk(nullValue, 'Given null as account number, validation should not be successful');
});
