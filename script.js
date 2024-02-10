window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
});

const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    alert("This site is still under construction! Thank you for your patience!")
});

// Check if passwords match 
function onChange() {
    let password = document.querySelector('input[name=password');
    let confirm = document.querySelector('input[name=confirm');
    (confirm.value === password.value) 
    ? confirm.setCustomValidity('') : confirm.setCustomValidity('Password does not match');
}




