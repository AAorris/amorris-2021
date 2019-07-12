'use strict'

function neralie (d = new Date(), e = new Date(d)) {
  const ms = e - d.setHours(0, 0, 0, 0)
  const val = (ms / 8640 / 10000).toFixed(6)
  // modified: 3 beat digits and one pulse digit shorthand
  const b = val.substr(2, 3), p = val.substr(5, 3)
  return `${b[0]}${b[1]} ${b[2]}${p[0]}`
}

function Neralie (t = neralie) {
  this.toInteger = function (d = new Date(), e = new Date(d)) {
    const ms = e - d.setHours(0, 0, 0, 0)
    return (ms / 8640) * 100
  }

  this.toString = function (n) {
    return `${neralie()}`
  }
}

// module.exports = Neralie
export default Neralie