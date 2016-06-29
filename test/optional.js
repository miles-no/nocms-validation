'use strict';
const test = require('tape');
const sut = require('../');

test('Optional values', (t) => {
  t.plan(2);
  const empty = sut.validate('', 'email', false);
  const incorrect = sut.validate('test@gmail,com', 'email', false);
  t.ok(empty, 'If a value is optional and no value is given, validation should be successful');
  t.notOk(incorrect, 'But if a value is optional and a incorrect value is provided, validation should not be successful');
});
