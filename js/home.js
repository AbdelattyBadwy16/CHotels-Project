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