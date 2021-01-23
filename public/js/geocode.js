const request =require('postman-request')

const geocode=(adresse,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(adresse)+'.json?access_token=pk.eyJ1IjoiY2hhaW1hZWJvdWFhYmFuZSIsImEiOiJja2h6MDN5dTEwOXlxMnFvaHQ4bG8wbHMzIn0.HK7vp0Fqm74U136oCqxcew'
    

 request({ url  , json: true }, (error, {body}) => {
    if (error) {
        callback('Unable to connect to weather service!',undefined)
    }

    else if (body.features.length === 0) {
        callback('Unable to find this location. Please try with an other search !',undefined)
    }
    else {
        const datageo={
            latitude : body.features[0].center[1],
            longitude :body.features[0].center[0],
            location : body.features[0].place_name
        }
    
        callback(undefined,datageo)
    }
 })

}
/*
geocode('Casablanca',(error,datageo)=> {
    console.log(datageo)
    console.log(error)
})
*/


module.exports=geocode
