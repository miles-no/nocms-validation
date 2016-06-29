'use strict';
const test = require('tape');
const sut = require('../');

test('Validate e-mail addresses', (t) => {
  t.plan(2);
  const correct = sut.validate('test@gmail.com', 'email', true);
  const incorrect = sut.validate('test@gmail,com', 'email', true);
  t.ok(correct, 'Given a valid e-mail, validation should be successful');
  t.notOk(incorrect, 'Given an invalid e-mail, validation should not be successful');
});
