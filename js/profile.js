let username_profile=document.getElementById('username_pr');
let name=document.getElementById('name_pr');
let email=document.getElementById('email');
let city=document.getElementById('city');
let my_money=document.getElementById('my_money');



function GetUser(){
    // get Data
    let data;
    if (localStorage.users != null) {
        data = JSON.parse(localStorage.users);
    } else {
        data = [];
    }
    let curUser = localStorage.getItem("username");
    for(let i = 0  ; i<data.length ; i++){
        if(data[i].username == curUser){
            username_profile.innerHTML=data[i].username;
            name.innerHTML=data[i].name;
            email.innerHTML=data[i].Email;
            city.innerHTML=data[i].city;
            my_money.innerHTML = data[i].balance + "$";
        }
    }
}
GetUser();

/*add money*/
let btn_add=document.getElementById('btn_add');
let hide=1;
// show the form
btn_add.onclick=function()
{
    if(hide==1)
    {
        balance.style.display='block';
        hide=0;
    }else
    {
        balance.style.display='none';
        hide=1;
    }
}

let wrong=document.getElementById('wrong_pro');
let card_id=document.getElementById('card_id');
let money=document.getElementById('money');
let add_balance=document.getElementById('add_balance');

//add money to account
add_balance.onclick=function()
{
    let cur_card=card_id.value;
    let cur_money=money.value;
    if(cur_card.length!=14)
    {
        wrong.innerHTML='Card id must be 14 digits'
        return;
    }else
    {
        wrong.innerHTML="";
    }

    if(cur_money.length===0)
    {
        wrong.innerHTML='Balance must not be empty'
        return;
    }else
    {
        wrong.innerHTML="";
    }
    alert('Succssful operation')
    balance.style.display='none'
    let data;
    if (localStorage.users != null) {
        data = JSON.parse(localStorage.users);
    } else {
        data = [];
    }
    let curUser = localStorage.getItem("username");
    for(let i = 0  ; i<data.length ; i++){
        if(data[i].username == curUser){
            data[i].balance = (+data[i].balance) + (+cur_money);
        }
    }
    localStorage.setItem('users', JSON.stringify(data));
}

