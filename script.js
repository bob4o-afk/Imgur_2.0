// script.js
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var formData = new FormData(this);

  // Send the registration form data to the server using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'register.php', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert(xhr.responseText); // Display the server response
    }
  };
  xhr.send(formData);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  var formData = new FormData(this);

  // Send the login form data to the server using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'login.php', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      if (xhr.responseText === 'success') {
        showUploadForm(); // Show the image upload form after successful login
      } else {
        alert('Invalid email or password.'); // Display error message for invalid login
      }
    }
  };
  xhr.send(formData);
});

function showUploadForm() {
  document.getElementById('registerFormDiv').style.display = 'none';
  document.getElementById('loginFormDiv').style.display = 'none';
  document.getElementById('imageGallery').style.display = 'block';
  // Additional code to fetch and display uploaded images
}
