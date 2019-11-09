const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2luZ2hhZGFyc2gwNDAzIiwiYSI6ImNrMHV2N29sbTBtdmQzY28xdXkxaXlyODkifQ.n07-kg7_0BW7-6y27qYxUw&limit=1'

    request({url, json : true} , (error,{body}) =>{
        if(error){
            callback('Unable to connect connection services', undefined)
        } else if (body.features.length === 0 ){
            callback('Unable to find location.Try another search', undefined)
        } else{
            callback(undefined,{
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
                
            })
        }
    })
}

module.exports = geocode