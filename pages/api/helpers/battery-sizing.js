export default async function sizing(req, res) {
  res.end(`<body>
    I consume <input type="number" id="loadWatts" value="500" /> watts
    <br/>
    for <input type="number" id="hoursPerDay" value="8" /> hours per day
    <br/>
    and I want <input type="number" id="daysRedundancy" value="3" /> days of redundancy
    <br/>
    If my battery must stay charged above <input type="range" id="depthOfDischarge" value="50" min="0" max="100" />
    <br />
    I need a battery that stores <input type="number" id="batteryStorage" value="24" /> KWh
    <script> document.addEventListener('input', e => { batteryStorage.value = ((loadWatts.value * hoursPerDay.value * (daysRedundancy.value)) / (1 - (depthOfDischarge.value / 100)) / 1000).toFixed(2) }) </script>
    <style> body { max-width: 600px; margin: auto; padding-top: 70px; line-height: 2em; } input { width: 10ch } input, body { font-size: 18pt; font-family: sans-serif; }</style>
</body>`);
}
