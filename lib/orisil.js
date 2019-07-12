// Get timestamp relative to Birthday
const birth = new Date(1993, 8, 11)
const DAY_IN_MS = 86400000 // 24 * 60 * 60 * 1000
const YEAR_IN_MS = DAY_IN_MS * 365.25
// Replace week with W=1y/100
const WEEK_IN_MS = YEAR_IN_MS / 99

function Orisil(date = new Date()) {
  const delta = date - birth
  this.year = Math.floor(delta / YEAR_IN_MS)
  this.week = Math.round((delta - this.year * YEAR_IN_MS) / WEEK_IN_MS)
  const pad = this.week < 10 ? '0' : ''
  this.toString = function() {
    return `${this.year} ${pad}${this.week}`
  }
  this.values = [this.year, this.week]
}
export default Orisil