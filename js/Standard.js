let username=document.getElementById('show-user');
let current_username=localStorage.getItem('username');

username.innerHTML=current_username;