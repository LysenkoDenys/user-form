const email = document.getElementById('mail');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');
const btn1 = document.getElementById('btn1');
const p = document.createElement('p');

function emailValidator() {
  if (email.value === '') {
    email.style.border = 'solid 2px red';
    p.textContent = 'Email is required';
    email.after(p);
  } else if (
    !email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
    )
  ) {
    email.style.border = 'solid 2px red';
    p.textContent = 'Email is incorrect';
    email.after(p);
  } else {
    email.style.border = 'solid 2px green';
    p.textContent = '';
  }
}

email.addEventListener('focus', (event) => {
  event.target.style.background = 'rgb(213, 236, 217)';
});

email.addEventListener('blur', (event) => {
  event.target.style.background = 'white';
  emailValidator();
});

function passValidator() {
  if (pass.value === '') {
    pass.style.border = 'solid 2px red';
    p.textContent = 'Password is required';
    pass.after(p);
  } else if (
    !pass.value.match(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()-_+=<>?]).{8,}$/g)
  ) {
    pass.style.border = 'solid 2px red';
    p.textContent =
      'Password must contain at least 8 symbols, 1 digit and 1 special symbol';
    pass.after(p);
  } else {
    pass.style.border = 'solid 2px green';
    p.textContent = '';
  }
}

pass.addEventListener('focus', (event) => {
  event.target.style.background = 'rgb(213, 236, 217)';
});

pass.addEventListener('blur', (event) => {
  event.target.style.background = 'white';
  passValidator();
});

function pass2Validator() {
  if (pass2.value === '') {
    pass2.style.border = 'solid 2px red';
    p.textContent = 'Confirm password is required';
    pass2.after(p);
  } else if (pass.value !== pass2.value) {
    pass2.style.border = 'solid 2px red';
    p.textContent = 'Password doesn`t match';
    pass2.after(p);
  } else {
    pass2.style.border = 'solid 2px green';
    p.textContent = '';
  }
}

pass2.addEventListener('focus', (event) => {
  event.target.style.background = 'rgb(213, 236, 217)';
});

pass2.addEventListener('blur', (event) => {
  event.target.style.background = 'white';
  pass2Validator();
});

function formValidator() {
  if (pass2.value === '' || pass.value === '' || email.value === '') {
    p.textContent = 'Some fields aren`t filled';
    btn1.after(p);
    //if email and pass and confirm is incorrect
  } else if (
    !email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
    ) &&
    !pass.value.match(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()-_+=<>?]).{8,}$/g
    ) &&
    pass.value !== pass2.value
  ) {
    p.innerHTML =
      '<p>Email is incorrect and password must contain at least 8 symbols,<br /> 1 digit and 1 special symbol and passwords don`t match</p>';
    btn1.after(p);
    //===================
  } else if (pass.value !== pass2.value) {
    p.textContent = 'Passwords don`t match';
    btn1.after(p);
  } else if (
    !pass.value.match(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()-_+=<>?]).{8,}$/g)
  ) {
    p.textContent =
      'Password must contain at least 8 symbols, 1 digit and 1 special symbol';
    btn1.after(p);
  } else {
    p.textContent = '';
    return false;
  }
}

btn1.addEventListener('click', (event) => {
  formValidator();
  if (formValidator() === false) {
    return console.log('the form has sent'); //
  }
  event.preventDefault();
});

// =====================================================================================
//eye1:
const togglePassword = document.querySelector('.password-toggle-icon i');
togglePassword.addEventListener('click', function () {
  if (pass.type === 'password') {
    pass.type = 'text';
    togglePassword.classList.remove('fa-eye');
    togglePassword.classList.add('fa-eye-slash');
  } else {
    pass.type = 'password';
    togglePassword.classList.remove('fa-eye-slash');
    togglePassword.classList.add('fa-eye');
  }
});

//eye2:
const togglePassword2 = document.querySelector('.password-toggle-icon-2 i');
togglePassword2.addEventListener('click', function () {
  if (pass2.type === 'password') {
    pass2.type = 'text';
    togglePassword2.classList.remove('fa-eye');
    togglePassword2.classList.add('fa-eye-slash');
  } else {
    pass2.type = 'password';
    togglePassword2.classList.remove('fa-eye-slash');
    togglePassword2.classList.add('fa-eye');
  }
});
