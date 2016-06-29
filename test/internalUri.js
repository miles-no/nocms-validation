'use strict';
const test = require('tape');
const sut = require('../');

test('Validate if an uri is internal', (t) => {
  t.plan(2);
  const correct = sut.validate('/test', 'internalUri', true);
  const incorrect = sut.validate('test.no', 'internalUri', true);
  t.ok(correct, 'Given an internal uri, validation should be successful');
  t.notOk(incorrect, 'Given an external uri, validation should not be successful');
});
