let home=document.getElementById('home');
let services=document.getElementById('services');
let port=document.getElementById('port');
let contact=document.getElementById('contact');
let menu=document.getElementById('menu');
let slidebar=document.getElementById('slide-bar');
let dark=document.querySelector('.darkmood');
let logo=document.getElementById('logo');
let logg=document.getElementsByClassName('log');
let icon=document.getElementById('darkmood');
let set=document.getElementById('setting');
let list_menu=document.getElementsByClassName('list-menu')
let card=document.getElementsByClassName('card')
let home_btn=document.getElementsByClassName('home-btn')
let user = document.getElementById("show-user");

dark.onclick=function(){
    let mood=localStorage.getItem("mood");
    if(mood=='1')localStorage.setItem("mood",'0');
    else localStorage.setItem("mood",'1');  
    ChangeMood();
}

function ChangeMood(){
    let mood=localStorage.getItem("mood");
    if(mood==1){
        document.body.classList.add('dark');
        logo.style=' color:white'
        slidebar.style="background-color:#222222;";
        home.style="color:white"
        port.style="color:white"
        services.style="color:white"
        contact.style="color:white"
        icon.src='icon/light.png';
        icon.style.background='white'
        set.style.background='#151515'
        user.style.color="#ffca1b"
        for(let i=0 ;i<card.length ; i++)
        {
            card[i].style.background='#151515'
            card[i].style.border='1px solid white'
        }
    
        for(let i=0 ;i<5 ; i++){
            logg[i].style="background-color: #ffca1b; border-radius: 20px;";
        }
        for(let i=0 ;i<list_menu.length ; i++){
            list_menu[i].style="color:white";
        }
    }else{
        document.body.classList.remove('dark');
        logo.style=' color:black'
        slidebar.style="background-color:white;";
        home.style="color:black"
        port.style="color:black"
        services.style="color:black"
        contact.style="color:black"
        icon.src='icon/dark_mode_FILL0_wght400_GRAD0_opsz48.png';
        icon.style.background='white'
        set.style.background='#f2f2fc'
        user.style.color="black"
        for(let i=0 ;i<card.length ; i++)
        {
            card[i].style.background='white'
            card[i].style.border='1px solid #777'
        }
        for(let i=0 ;i<5 ; i++){
            logg[i].style="background-color:white; border-radius: 20px;";
        }
        for(let i=0 ;i<list_menu.length ; i++){
            list_menu[i].style="color:black";
        }
    }
}
ChangeMood();

