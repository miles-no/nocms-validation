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

test('Validate with custom function and context', (t) => {
  t.plan(1);

  const fn = (value, context) => context && context.foo === 1337;

  const isValid = sut.validate('a', fn, true, { foo: 1337 });

  t.ok(isValid, 'Context missing');
});
