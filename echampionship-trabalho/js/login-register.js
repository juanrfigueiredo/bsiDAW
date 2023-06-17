function login() {
  var username = document.getElementById('username').value;
  console.log(username)
  localStorage.setItem("username", username);
}


//onload change innerHTML of #username to localStorage.getItem(username)


document.addEventListener('DOMContentLoaded', function () {
  var name = localStorage.getItem("username");
  if (name === null) name = "";
  else name = `<div style="color: pink;">${name} ✅</div>`
  document.getElementById('loggedUser').innerHTML = name;
});