let carts=document.getElementsByClassName('fav-item');
let fromimg=document.getElementById('fromImg')
let toimg=document.getElementById('toImg')
let from=document.getElementById('from')
let to=document.getElementById('to')
let price=document.getElementById('price')
let del=document.getElementById('del')

if(localStorage.getItem('from')===null)
{
    carts[0].style.display='flex'
    carts[0].innerHTML='No Item Found';
}else
{
    carts[0].style.display='flex'
    fromimg.src=localStorage.getItem('srcf')
    toimg.src=localStorage.getItem('srct')
    from.innerHTML=localStorage.getItem('from')
    to.innerHTML=localStorage.getItem('to')
    price.innerHTML=localStorage.getItem('price')
}

del.onclick=function(){
    localStorage.removeItem('from')
    window.location='yourcarts.html'
}