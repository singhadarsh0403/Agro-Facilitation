const request = require('request')

const crop = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a3b955aa0ef17ff914f03cce4d8ca2b1/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'grow no crop')
        }
    })
}


module.exports = crop