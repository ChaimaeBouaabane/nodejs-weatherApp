const request = require('postman-request')
const forecast = require('./forecast.js')
const  geocode = require('./geocode')



const adresse=process.argv[2];
if(!adresse){
    console.log('Please tap an adress !')
}
else{
 
   geocode(adresse,(error,{latitude,longitude,location}={}) => {
       if (error){
           console.log(error)
       }
       else{
            forecast(latitude,longitude,(error,data) => {
                
                if (error){
                    console.log(error)
                }
                else {
                    console.log(location)
                    console.log(data)
                }   
            })  
       }

    })
} 
/*
const name='Chaimae'
const age=23
const user= {
    name,
    age
}

console.log(user)

*/


