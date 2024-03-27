function validate() {
  var password = document.getElementById("pass");
  var length = document.getElementById("length");

  if (password.value.length >= 8) {
    alert("Login is successful");
    window.location.replace("newpage.html");
    return false;
  } else {
    alert("Login failed");
  }
}
