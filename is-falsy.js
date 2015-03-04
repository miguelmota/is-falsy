(function(root) {

  function isFalsy(v) {
    return !v;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isFalsy;
    }
    exports.isFalsy = isFalsy;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isFalsy;
    });
  } else {
    root.isFalsy = isFalsy;
  }

})(this);

