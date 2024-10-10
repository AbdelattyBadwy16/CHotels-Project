
// set username 
let username=document.getElementById('show-user');
let current_username=localStorage.getItem('username');

username.innerHTML=current_username;


// drop code
let drop=document.getElementById('drop');

let flag=1;

function check_drop()
{
   if(flag)
   {
      drop.style.display='flex';
      flag=0;
   }else
   {
      drop.style.display='none';
      flag=1;
   }
}