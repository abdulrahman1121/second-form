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
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const password2Value = password2.value
}

