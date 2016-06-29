'use strict';
const test = require('tape');
const sut = require('../');

test('Validate date and time', (t) => {
  t.plan(2);
  const correct = sut.validate('1981-04-05T14:30', 'datetime', true);
  const incorrect = sut.validate('04.05.1981 14:15', 'datetime', true);
  t.ok(correct, 'Given a valid date, validation should be successful');
  t.notOk(incorrect, 'Given an invalid e-mail, validation should not be successful');
});
