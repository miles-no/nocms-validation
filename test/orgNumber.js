'use strict';
const test = require('tape');
const sut = require('../');

test('Validate organization numbers', (t) => {
  t.plan(3);
  const correct = sut.validate(989568078, 'orgNumber', true);
  const incorrect = sut.validate('-1', 'orgNumber', true);
  const nullValue = sut.validate(null, 'orgNumber', true);
  t.ok(correct, 'Given a valid organization number, validation should be successful');
  t.notOk(incorrect, 'Given an invalid organization number, validation should not be successful');
  t.notOk(nullValue, 'Given null as org number, validation should not be successful');
});
