const request = require('request')
 
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=95f24bfd1934ee289f3f69fe71c535d3&query=' + latitude + ',' + longitude
 
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback( undefined, 'It is Currently ' + body.current.weather_descriptions[0] + '  and Temprature is ' + body.current.temperature +' Recorded time is '+ body.current.observation_time)
        }
    })
}
 
module.exports = forecast

//undefined, body.daily.data[0].summary + ' It is currently ' + body.current.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.current.precipProbability + '% chance of rain