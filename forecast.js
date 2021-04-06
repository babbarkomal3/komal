const request = require('request')
const forecast = (latitude,longitude,callback) => {
              const url = 'http://api.weatherstack.com/current?access_key=ce25c1c3f41c98ced6250b53be7b0a52&query=' + latitude + ',' + longitude + '&units=f';
request({url,json:true},(error,{body})=>{
                  if(error){
                 callback('unable to connect to weather services',undefined)
     }
               else if(body.error){
                 callback('unable to find location',undefined)
              }
           else{
                 callback(undefined,body.current.weather_descriptions[0] + ' It is '+ body.current.temperature + ' degree outside and feels like ' + body.current.feelslike + ' degrees out')  
          }
     })
        
  }

module.exports = forecast