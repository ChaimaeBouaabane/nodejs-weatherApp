console.log('Heeey')

const weatherForm = document.querySelector('form')
const searchElement=document.querySelector('input')
const messageOne =document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()

    const location =searchElement.value
    messageOne.textContent='Loading...'
    fetch('/weather?adress='+location).then((response) => {

    response.json().then((data)=>{
        if(data.error){
             messageOne.textContent=data.error
             messageTwo.textContent=''
        }
          else{
                messageOne.textContent=data.location
                messageTwo.textContent=data.forecast
            }
    })


})

    
})