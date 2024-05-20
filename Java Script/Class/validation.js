const form = document.querySelector('.form');
const Username = document.querySelector('#Username');
const Email = document.querySelector('#Email');
const password = document.querySelector('#password')
const Comfirm_password = document.querySelector('#Comfirm_password');
// console.log(Username);
// console.log(Email);
// console.log(password);
// console.log(Comfirm_password);
function setError(input, message) {
    const formgroup = input.parentElement;
    // console.log(formgroup);
    const small = document.querySelector('small');
    formgroup.classList.remove('success');
    formgroup.classList.add('error');
    small.innerHTML = message;
}
function setSuccess(input) {
    const formgroup = input.parentElement;
    formgroup.classList.add('success');
    formgroup.classList.remove('error');
}
function isEmail(Email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email);
}

Username.addEventListener('keyup',function(){
    const UsernameValue = Username.value.trim();
    if (UsernameValue === " "){
        setError(Username,"Username cannot be blank");
    }
    else {
        setSuccess(Username);
    }
})

Email.addEventListener('keyup',function(){
    const EmailValue = Email.value.trim();
    if(EmailValue === " "){
        setError(Email,"Email cannot be blank");
    }
    else if(!isEmail(EmailValue)){
        setError(Email,"Email cannot u blank");
    }
    else {
        setSuccess(Email);
    }
})

password.addEventListener('keyup',function(){
    const passwordValue = password.value.trim();
    if(passwordValue === " "){
        setError(password,"password cannot be blank");
    }
    else if(passwordValue.lenght < 8 ){
        setError(password,"password cannot small 8 character");
    }
    else {
        setSuccess(password);
    }
})


Comfirm_password.addEventListener('keyup',function(){
    const passwordValue = password.value.trim();
    const Comfirm_passwordValue = Comfirm_password.value.trim();
    if(Comfirm_passwordValue === " "){
        setError(Comfirm_password,"Comfirm_password cannot be blank");
    }
    else if(passwordValue!== Comfirm_passwordValue ){
        setError(Comfirm_password,"Comfirm_password should be like password");
    }
    else {
        setSuccess( Comfirm_password);
    }
})


function checkInput(){
    const UsernameValue         = Username.value.trim();
    const EmailValue            = Email.value.trim();
    const passwordValue         = password.value.trim();
    const Comfirm_passwordValue = Comfirm_password.value.trim();

    //check condition for Username

    if (UsernameValue === " "){
        setError(Username,"Username cannot be blank");
    }
    else {
        setSuccess(Username);
    }

    //check condition for Email

    if(EmailValue === " "){
        setError(Email,"Email cannot be blank");
    }
    else if(!isEmail(EmailValue)){
        setError(Email,"Email cannot be blank");
    }
    else {
        setSuccess(Email);
    }

    //check condition for password

    if(passwordValue === " "){
        setError(password,"password cannot be blank");
    }
    else if(passwordValue.lenght < 8 ){
        setError(password,"password cannot small 8 character");
    }
    else {
        setSuccess(password);
    }

    //check condition for comfirm_password

    if(Comfirm_passwordValue === " "){
        setError(Comfirm_password,"Comfirm_password cannot be blank");
    }
    else if(passwordValue!== Comfirm_passwordValue ){
        setError(Comfirm_password,"Comfirm_password should be like password");
    }
    else {
        setSuccess( Comfirm_password);
        window.location.assign('./va.html')
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
})