'use strict';
const test = require('tape');
const sut = require('../');

test('Validate confirmation', (t) => {
  t.plan(2);
  const correct = sut.validate(true, 'confirm', true);
  const incorrect = sut.validate(false, 'confirm', true);
  t.ok(correct, 'When the user confirms, validation should be successful');
  t.notOk(incorrect, 'When the user did not confirm, validation should not be successful');
});
