function signIn() {
    window.location.href = "main.html";
}

function signIn() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email == "" || password == "") {
    alert('Please fill both fields');
  }
  else{
    window.location.href = 'main.html';
  }
}

function signOut() {
  window.location.href = "index.html";
}

function signOut() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email == "" || password == "") {
    alert('Please fill both fields');
  }
  else{
    window.location.href = 'index.html';
  }
}


