let bar=document.getElementById('slide-bar-menu')
let menu1=document.getElementById('menu1');
let menu2=document.getElementById('menu2');

let y=0; 
menu1.onclick=function(){
        y=0;
        bar.style.display='none';
}

menu2.onclick=function(){
        bar.style.display='block';
        bar.style.position='relative';
}