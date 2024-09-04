const nameInput = document.getElementById('name');
const genderRadio = document.getElementsByName('gender');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');
const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  if (!nameInput.value) {
    alert('Please enter your name');
    return;
  }

  if (!genderRadio[0].checked && !genderRadio[1].checked && !genderRadio[2].checked) {
    alert('Please select your gender');
    return;
  }

  if (!emailInput.value) {
    alert('Please enter your email');
    return;
  }

  if (!passwordInput.value) {
    alert('Please enter your password');
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert('Passwords do not match');
    return;
  }

  const formData = new FormData();
  formData.append('name', nameInput.value);
  formData.append('email', emailInput.value);
  formData.append('password', passwordInput.value);

  fetch('/register', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});