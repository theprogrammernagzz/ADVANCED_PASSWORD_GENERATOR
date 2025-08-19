const password = document.querySelector('#password'); 
const button = document.querySelector('button');

// Password Data
let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()[]{};":<>,./?|\\+_';
let passwordLength = 8; 
let passwordValue = '';

// Create Password
const createPassword = () => { 
  passwordValue = '';
  for (let i = 0; i < passwordLength; i++) { 
    let number = Math.floor(Math.random() * characters.length);
    passwordValue += characters.charAt(number); // safer than substring
  }
  password.value = passwordValue;
};

// Events
button.addEventListener('click', createPassword);

