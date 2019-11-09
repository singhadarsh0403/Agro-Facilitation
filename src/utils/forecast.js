const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a3b955aa0ef17ff914f03cce4d8ca2b1/' + latitude + ',' + longitude
   
    

    request({ url, json: true }, (error, { body }) => {
        var final_data = body.daily.summary+  'It is currently ' + body.currently.temperature + 
                            ' degress outside.\n There is a ' + body.currently.precipProbability + '% chance of rain. Highest Temperature will be ' + body.daily.data[0].temperatureHigh + '. Lowest temperature will be' +  body.daily.data[0].temperatureLow + '. Humidity percentage is' +  body.daily.data[0].humidity;
                            var avgtemp=(body.daily.data[0].temperatureLow + body.daily.data[0].temperatureHigh)/2;
                            var today = new Date();
                            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            var dateTime = date+' '+time;
       
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else if(avgtemp>36)
        {
            if(body.daily.data[0].humidity<0.40)
            {
                if( body.currently.precipProbability<38)
                {
                    var opt = "WARNING! temperature is high USE THESE PRECAUTIONS \n Use wet Grass Reduce soil moisture loss. \nSelect optimum sowing time. \n Moisture required \n Check for soil depth and Plogh pans\n Apply water with greater quantity\n Check time for irrigation"
                    callback(final_data + opt, undefined)
               }
                else
                {
                    var opt1 = "WARNING! temperature is high USE THESE PRECAUTIONS \n  Use wet Grass \n  Reduce soil moisture loss \n Use sprinkle irrigation if possible \n Select optimum sowing time \n  Moisture required \n  Check for soil depth and Plogh pans\n lower irrigation capacity\n  Check for Waterlagging "
                    callback(final_data + opt1,undefined);
                }
            } 
            else
            {
        
                if( body.currently.precipProbability<38)
                {
                    var opt2 = "WARNING! temperature is high USE THESE PRECAUTIONS \n  Use wet Grass \n  Reduce soil moisture loss \n Use sprinkle irrigation if possible \n Select optimum sowing time \n  Check if water logging is there\n lower irrigation capacity \nimprove irrigation\n  Check time for irrigation"
                    callback(final_data + opt2,undefined);
                }
                else
                {
                    var opt3 = "WARNING! temperature is high USE THESE PRECAUTIONS \n  Use wet Grass \n  Reduce soil moisture loss \n Use sprinkle irrigation if possible \n Select optimum sowing time \n  Check if water logging is there\n lower irrigation capacity \nCheck WaterLogging \n Lower Irrigation Capacity "
                    callback( final_data+ opt3,undefined);
                }
            }
        }
         else(avgtemp<20)
        {
            if(body.daily.data[0].humidity<0.40)
            {
                if( body.currently.precipProbability<38)
                {
                    var opt4 = "WARNING! temperature is low USE THESE PRECAUTIONS\n  plant earlier or later than most frost sensitive stage \n Plant crops of variable length \nPlant crops of variable varieties \n Check for soil depth and Plough pans\n Apply water with greater quantity\n Check time for irrigation \nimprove irrigation\n  Check time for irrigation" 
                     callback(final_data + opt4,undefined);
                }
                else
                {
                    var opt5 = "WARNING! temperature is low USE THESE PRECAUTIONS\n  plant earlier or later than most frost sensitive stage \n Plant crops of variable length \nPlant crops of variable varieties \n Check for soil depth and Plough pans\n Apply water with greater quantity\n Check time for irrigation \n Check WaterLogging \n  Lower Irrigation Capacity "
                    callback(final_data + opt5, undefined);
                }
            }
            else
        
            {   
                    if( body.currently.precipProbability<38)
                    {
                        var opt5 = "WARNING! temperature is low USE THESE PRECAUTIONS\n  plant earlier or later than most frost sensitive stage \n Plant crops of variable length \nPlant crops of variable varieties Check for soil depth and Plough pans\n Apply water with greater quantity\n Check time for irrigation \n improve irrigation\n Check time for irrigation "
                        callback(final_data+  opt5,undefined);
                    }
                
                    else
                    {
                        var opt6 = "WARNING! temperature is low USE THESE PRECAUTIONS\n  plant earlier or later than most frost sensitive stage \n Plant crops of variable length \nPlant crops of variable varieties Check for soil depth and Plough pans\n Apply water with greater quantity\n Check time for irrigation \n Check WaterLogging \n Lower Irrigation Capacity"
                        callback(final_data + opt6,undefined);
                    }
                }
        }
    })
}

module.exports = forecast