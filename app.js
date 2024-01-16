//Selectors

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-two');


//eventListeners

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

//functions

const checkInputs = () => {
    //get value from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cant be blank');
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cant be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cant be blank');
    }else{
        setSuccessFor(password)
    }

    if(password2Value === ''){
        setErrorFor(password2, 'Password2 cant be blank');
    }else if(passwordValue !== password2Value){
        setErrorFor(password2, 'Password2 must match password')
    }else{
        setSuccessFor(password2);
    }

    //show a success message
}


const setErrorFor = (input, message) => {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}

const isEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}