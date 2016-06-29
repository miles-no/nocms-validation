'use strict';
const test = require('tape');
const sut = require('../');

test('Validate int', (t) => {
  t.plan(4);
  const correct = sut.validate('12', 'int', true);
  const incorrect = sut.validate('12.5', 'int', true);
  const negative = sut.validate('-3', 'int', true);
  const string = sut.validate('sdfl', 'int', true);
  t.ok(correct, 'Given a valid int, validation should be successful');
  t.ok(negative, 'It should handle negative numbers');
  t.notOk(incorrect, 'Given an double, validation should not be successful');
  t.notOk(incorrect, 'Given an string, validation should not be successful');
});
