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
  } else if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    email.style.border = 'solid 2px red';
    p.textContent = 'Email is incorrect';
    email.after(p);
  } else {
    email.style.border = 'solid 2px green';
    p.textContent = '';
  }
}

email.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
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
  event.target.style.background = 'pink';
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
  event.target.style.background = 'pink';
});

pass2.addEventListener('blur', (event) => {
  event.target.style.background = 'white';
  pass2Validator();
});

function formValidator() {
  if (pass2.value === '' || pass.value === '' || email.value === '') {
    p.textContent = 'Some fields aren`t filled';
    btn1.after(p);
  } else if (pass.value !== pass2.value) {
    p.textContent = 'Passwords doesn`t match';
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
