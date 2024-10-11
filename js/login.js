let username=document.getElementById('username');
let password=document.getElementById('password');
let submet_btn=document.getElementById('login-btn');
let warning=document.getElementById('warning');



// validation and check of login form
submet_btn.addEventListener('click',function(e)
{
    e.preventDefault();

    // login validate
    if(!loginValidate()){
      return ;
    }

    // login check
    handelLogin();
})


// validation of login form
function loginValidate(){
  // user and pass empty
  if(!username.value.length || !password.value.length){
    warning.innerHTML = "Please don`t keep any field empty."
    return false;
  }
  return true;
}


// handel Login function
function handelLogin(){


  if(isAdmin()){
    warning.innerHTML="Please, wait";
    localStorage.setItem("username" , username.value);
    setTimeout(() => {
      window.location='dashbord.html';
    }, 1500)
    return;
  }

  if(checkAuth()){
    warning.innerHTML="Please, wait";
    localStorage.setItem("username" , username.value);
    setTimeout(() => {
      window.location='html.html';
    }, 1500)
  }
  else
  // the user not exists
  warning.innerHTML="Invalid username or password";
    
}



function isAdmin(){
    // check if user is admin
    if(username.value == "admin" && password.value =="admin"){
      return true;
    }
    return false;
}

function checkAuth(){

  // get data from localstorage
  let data;
  if (localStorage.users != null) {
      data = JSON.parse(localStorage.users);
  } else {
      data = [];
  }
  
  // check for auth
  for(let i = 0 ; i<data.length ; i++){
    if(data[i].username == username.value && data[i].Password == password.value){
      return true;
    }
  }

  return false;
}