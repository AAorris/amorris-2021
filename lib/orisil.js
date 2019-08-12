// Get timestamp relative to Birthday
const birth = new Date(1993, 8, 11)
const YEAR_IN_MS = 31456364032.23077
const WEEK_IN_MS = YEAR_IN_MS / 52.17857

function Orisil(date = new Date()) {
  const delta = date - birth
  this.year = Math.round(delta / YEAR_IN_MS)
  this.week = Math.max(0, Math.floor((delta % YEAR_IN_MS) / WEEK_IN_MS / 52.17857 * 100))
  const pad = this.week < 10 ? '0' : ''
  this.toString = function() {
    return `${this.year} ${pad}${this.week}`
  }
  this.values = [this.year, this.week]
}
export default Orisil