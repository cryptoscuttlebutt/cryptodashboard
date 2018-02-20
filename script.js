// general config for all charts
var config = {
    presetColorScheme: 'black',
    timePeriod: '30m'
}

// exchange, currency pair, html element id
var charts = [
    ['bitfinex', 'btcusd', 'one'],
    ['bitfinex', 'iotusd', 'two'],
    ['bitfinex', 'xrpusd', 'three'],
    ['poloniex', 'dogebtc', 'four'],
	['bitfinex', 'gntusd', 'five'],
	['bitfinex', 'sntusd', 'six'],
	['bitfinex', 'omgusd', 'seven']
]

// create all charts
charts.forEach(function (chart) {
    chart.push(new cryptowatch.Embed(chart[0], chart[1], config))
    chart[3].mount('#' + chart[2])
})

// listen for changes in "time period" select box
document.getElementById('timePeriod').onchange = function(event) {
    charts.forEach(function (chart) {
        var cell = document.getElementById(chart[2])
        cell.removeChild(cell.firstChild)
        chart[3].opts.timePeriod = event.target.value
        chart[3].mount('#' + chart[2])
    })
}
