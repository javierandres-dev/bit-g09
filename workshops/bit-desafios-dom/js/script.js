'use strict';
const $formLogin = document.getElementById('formLogin');

$formLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = $formLogin.username.value;
  const password = $formLogin.password.value;
  console.log(username, password);
  alert('Processing...');
});
