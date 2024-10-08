let username=document.getElementById('username');
let name=document.getElementById('name');
let password=document.getElementById('password');
let cpassword=document.getElementById('cpassword');
let email=document.getElementById('email');
let city=document.getElementById('city');
let ch_btn=document.getElementById('check');
let submet_btn=document.getElementById('sub_btn');
let warning=document.getElementById('warning');



submet_btn.addEventListener('click',function(e)
{
    e.preventDefault();

    // login validate
    if(!registerValidate()){
      return ;
    }

    // login check
    handelRegister();
})

function registerValidate()
{
    // get Data
    let data;
    if (localStorage.users != null) {
        data = JSON.parse(localStorage.users);
    } else {
        data = [];
    }

    // validate
    if(name.value.length<4)
    {
      warning.innerHTML='Name must be more 4 char';
      return false;
    }
    else if(username.value.length<4)
    {
      warning.innerHTML='UserName must be more 4 char';
      return false;
    }else if(!email.value.length)
    {
      warning.innerHTML='Email has empty';
      return false;
    }else if(password.value.length<4)
    {
      warning.innerHTML='Password must be more 8 char';
      return false;
    }else if(!cpassword.value.length)
    {
      warning.innerHTML='Confirm Password has empty';
      return false;
    }else if(city.value==='Governorate')
    {
      warning.innerHTML='Choose City please';
      return false;
    }else if(!ch_btn.checked)
    {
      warning.innerHTML='You should check the button';
      return false;
    }else if(password.value!=cpassword.value)
    {      
      warning.innerHTML='Password not equal';
      return false;
    }else warning.innerHTML = "";

    for(let i=0 ; i<data.length ; i++){
      if(data[i].username == username.value){
        warning.innerHTML = 'Username already exists.'
        return false;
      }
    }
    return true;
}

function handelRegister(){

  // get Data
  let data;
  if (localStorage.users != null) {
      data = JSON.parse(localStorage.users);
  } else {
      data = [];
  }

  const userData = {
    name : name.value,
    username: username.value,
    Email: email.value,
    Password: password.value,
    city: city.value,
    balance : 0
    };

  // push data in localstorage
  data.push(userData);
  localStorage.setItem('users', JSON.stringify(data));

  //navigate to login page
  warning.innerHTML="Please, wait";
  setTimeout(() => {
    window.location='login.html';
  }, 1500);
}