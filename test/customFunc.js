const test = require('tape');
const sut = require('../');

test('Validate with custom function', (t) => {
  t.plan(2);

  const fn = value => value === 'a';

  const correct = sut.validate('a', fn, true);
  const incorrect = sut.validate('b', fn, true);

  t.ok(correct, 'Given valid value should be successful');
  t.notOk(incorrect, 'Given an invalid value, validation should not be successful');
});
