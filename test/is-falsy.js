var test = require('tape');
var isFalsy = require('../is-falsy');

test('isFalsy', function (t) {
  t.plan(9);

  t.true(isFalsy(''));
  t.true(isFalsy(0));
  t.true(isFalsy(null));
  t.true(isFalsy(undefined));
  t.true(isFalsy(NaN));
  t.false(isFalsy(1));
  t.false(isFalsy({}));
  t.false(isFalsy([]));
  t.false(isFalsy(function(){}));
});
