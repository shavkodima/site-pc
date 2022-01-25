export const formMail = ()=>{
    const form = document.getElementsByTagName('form');
    const status = document.querySelectorAll('.status-form')
   for(let i=0; i<form.length; i++){
    form[i].addEventListener('submit', (e)=>{
        e.preventDefault()
        let formData = new FormData(form[i]);
       
        alert(formData)
        
        sendMail(formData)
        .then((data)=>{
            status[i].textContent = data;
            form[i].reset()
        })
    })
   }
}
const url ='mail.php'


const sendMail = async (formData)=>{
    const response = await fetch(url,{
        method:'POST',
        body:formData
    })
    
    return await response.text()
}
