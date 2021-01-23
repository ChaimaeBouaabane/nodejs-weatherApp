const   request = require('postman-request')

const forecast =(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=8e4893ef86e5fa7a05f53d0f7a09fd2b&query='+latitude+','+longitude+'&units=m'

    request({ url,json:true }, (error,{body}) => {

        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
         else if(body.error){
          callback('Unable to find this location. Please try with an other search!', undefined)
        }
        else {
        
        callback( ' It is currently '+body.current.temperature+' degrees. It feels like '+ body.current.feelslike+' degrees',undefined )
        }
         
    })
    

}

/*
forecast(33.5883100,-7.6113800,(error,data)=>{
    console.log(data)
    console.log(error)
})

*/
module.exports= forecast 

