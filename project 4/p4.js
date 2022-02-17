console.log("hii")
const name = document.getElementById('name')
const mail  = document.getElementById('email')
const phone = document.getElementById('phoneno')
let  validemail = false
let validphone = false
let validname = false
name.addEventListener('blur',function()
{
    console.log("name is blur")
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = name.value;
    if(regex.test(str)){
     name.classList.remove('is-invalid')
     validname = true
    }
    else
    {
        name.classList.add('is-invalid');
    }
}
)

mail.addEventListener('blur',function()
{
    console.log("mail is blur")
    let regex = /[a-zA-Z0-9\._]{2,}[@][A-Za-z]{5,}[.][A-Za-z]{2,}/
    let str = mail.value;
    if(regex.test(str)){
     mail.classList.remove('is-invalid')
     validemail = true;
    }
    else
    {
        mail.classList.add('is-invalid');
    }
}
)

phone.addEventListener('blur',function()
{
    console.log("phone is blur")
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    if(regex.test(str)){
     phone.classList.remove('is-invalid')
     validphone = true
    }
    else
    {
        phone.classList.add('is-invalid');
    }
}
)
let submit=  document.getElementById('submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault();
 console.log('submit');
 if(validphone==true&&validemail==true&&validname==true)
 {
    sucess = document.getElementById('succes')
    sucess.classList.add('show');
    sucess.classList.remove('faliure')
    


 }
 else
 {
     console.log('error')
     let fail =  document .getElementById('faliure')
     fail.classList.add('show');
     sucess.classList.remove('show');
     sucess.classList.remove('show')
    
     
 }
 
})
