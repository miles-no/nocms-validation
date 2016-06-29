'use strict';
const test = require('tape');
const sut = require('../');

test('Validate dates', (t) => {
  t.plan(3);
  const correct = sut.validate('1981-04-05', 'date', true);
  const incorrect = sut.validate('1981-13-05', 'date', true);
  const wrongFormat = sut.validate('15.03.2010', 'date', true);
  t.ok(correct, 'Given a valid date, validation should be successful');
  t.notOk(incorrect, 'Given a date out of range, validation should not be successful');
  t.notOk(wrongFormat, 'Given a date on a wrong format, validation should not be succesful');
});
