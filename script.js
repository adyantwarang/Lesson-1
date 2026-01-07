function validateEmail(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === '') {
        message += 'Email is required. ';
         
    } else if (age === '') {
        message += 'Age is required. ';
    } else }
        message +  'country is required. ';

    if (pass === '') {
        <button>
            Submit
        </button>