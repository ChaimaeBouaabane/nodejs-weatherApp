const express =require('express')
const path =require('path')
const hbs =require('hbs')
const request = require('postman-request')
const forecast = require('../public/js/forecast')
const  geocode = require('../public/js/geocode')


const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'./templates/views')
const partialPath=path.join(__dirname,'./templates/partial' )

const app = express()
app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(publicDirectoryPath))

hbs.registerPartials(partialPath)

app.listen(3600,()=>{
    console.log('Server is up on port 3600')
})




app.get('',(req,resp)=>{

    resp.render('index',{
        title:'Weather page',
        name : 'BOUAABANE Chaimae'

    })
})


app.get('/about',(req,resp)=>{

    resp.render('about',{
        title :'About Me',
        name : 'BOUAABANE Chaimae'
    })
    
})
app.get('/help',(req,resp)=>{

    resp.render('help',{
        title :'Welcome to a HELP page',
        help : 'This is some helpful text.',
        name : 'BOUAABANE Chaimae'
    })

})
app.get('/weather',(req,resp)=>{
    
    if(!req.query.adress)
    {
        return resp.send({
         error :'You must tap an adress'
             })
    }        
    else {
        geocode(req.query.adress,(error,{latitude,longitude,location}={}) => {
            if (error){
                return resp.send({error})
            }
            else{
                 forecast(latitude,longitude,(data,error) => {
                     if (error){
                        return resp.send({error})
                     }
                     
                        resp.send({
                            
                            location : location,
                            forecast : data,
                            adress: req.query.adress
                        })
                       
                 })  
            }
     
         })
        
    }
})
app.get('/help/*',(req,resp)=>{

    resp.render('error',{
        title : 'Eror 404 ',
        name : 'BOUAABANE Chaimae',
        text :  'Help article unfounded' 
    })

})
app.get('*',(req,resp)=>{

    resp.render('error',{
        title : 'Eror 404 ',
        name : 'BOUAABANE Chaimae',
        text : 'Unfounded page !'
    })
})





