var CSSescape = require('css.escape')

exports.getHash = function getHash (hash) {

  if (!hash) return
  setTimeout(function () {
    var els = exports.elements(hash)
    if (! els) return
    if (exports.scroller(els.id)) return
    exports.scroller(els.name)
  }, 0)
}

exports.elements = function elements (hash) {
  var sels = exports.selectors(hash)
  if (! sels) return
  return {
    id: document.getElementById(sels.id),
    name: document.querySelector(sels.name)
  }
}

exports.scroller = function scroller (el) {
  if (! el) return false
  el.scrollIntoView()
  return true
}

exports.selectors = function selectors (h) {
  if (! h) return
  var re = /\?anchor=(.*)?(?=&)/;
  h = re.exec(h);
  if (! h) return
  return {
    id: h[1],
    name: '[name="' + CSSescape(h[1]) + '"]'
  }
}

exports.anchoreit = function anchoreit () {
  exports.getHash(window.location.hash)
}
