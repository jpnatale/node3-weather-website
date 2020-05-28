const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/c12c23795a7475261d2a8d140656bc83/' +
        lat + ',' + long
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const current = body.currently
            callback(undefined, current.summary + '. It is currently ' + current.temperature + ' degrees out. There is a ' + current.precipProbability + '% chance of rain.')

        }
    })
}

module.exports = forecast