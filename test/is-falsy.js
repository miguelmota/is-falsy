var test = require('tape');
var isFalsy = require('../is-falsy');

test('isFalsy', function (t) {
  t.plan(8);

  t.true(isFalsy(''));
  t.true(isFalsy(0));
  t.true(isFalsy(null));
  t.true(isFalsy(undefined));
  t.false(isFalsy(1));
  t.false(isFalsy({}));
  t.false(isFalsy([]));
  t.false(isFalsy(function(){}));
});
