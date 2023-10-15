const usernameEl = document.querySelector('#username');
const EmailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = () => {
    let valid = false;
    const min =3,
         max = 25;
    const username = usernameEl.value.trim();
    
    if (!isRequired(username)){
        showError(usernameEl,'username cannot be black');
    }else if (!isBetween(username.length, min, max)) {
        showError(usernameEl,'username must be between ${min} and ${max} characters.')
    } else {
        showSuccerss(usernameEl);
        valid = true;
    }
    return valid;
};
const checkEmail = () =>{
    let valid = false;
    const email = EmailEl.value.trim();

    if (!isRequired(email)) {
        showError(EmailEl,'Email cannot be black.');

    }else if(!isEmailValid(email)) {
        showError(EmailEl,'Email is not valid')
    }else{
        showSuccerss(EmailEl)
        valid = true;
    }
    return valid;
};

const checkPassword = ()=>{
    let valid = false  ;
    const password = passwordEl.valid.trim();
    if (!Required(password)) {
        showError(passwordEl, 'Password cannot be black.');

    }else if(!isPasswordSecure(password)){
        showError(passwordEl, 'Password must has at least 8 charaters that include at least  1 lowercase '+
        'charater, 1 uppercase charaters,1 number, 1 and special chrater in (!@#$%^&*)');
    }else{
        showSuccerss(passwordEl);
        valid = true;

    }
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)){
        showError(confirmPasswordEl,'please enter the password again');

    }else if (password != confirmPassword) {
        showError(confirmPassword,'The password does not match');

    }else{
        showSuccerss(confirmPassword)
        valid = true;

    }
    return valid;
};

const isEmailValid = (email) =>{

    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w=)*(\.\w{2,3})+$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {

    const re = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\%%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length,min,max) => length < min || length > max ? false : true;
const showError = (input, Message) => {

    const formField = input.parentElement;
         formField.classList.remove('success');
         formField.classList.add('error');
         const error = formField.querySelector('small');
         error.textcntent = message;

};

const showSuccerss = (input)=>{
        const formField = input.paremtElment;

        formField.classList.remove('error');
        formField.classList.add('succeess');

        const error = formField.querySelector('small');
        error.textcntent = '';
}
form.addEventListener('submit', function (e){

    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormvalid = isUsernamevalid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

        if (isFormvalid){

        }
});

const debounce = (fn, delay = 1) => {
    let timeoutId;
    return (...args) => {

        if(timeoutId) {
            clearTimeout(timeoutId);

        }

        timeoutId = setTimeout(() => {
            fn.apply(null,args)
        },delay);
    };
};

form.addEventListener('input', debounce(function(e) {
    switch(e.target.id){
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));