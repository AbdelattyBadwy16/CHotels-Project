let newuser=document.getElementById('change_user')
let newname=document.getElementById('change_name')
let newemail=document.getElementById('change_email')
let newpass=document.getElementById('change_pass')
let oldpass=document.getElementById('change_old')
let newimg=document.getElementById('img')
let prof_img=document.getElementById('prof_img');



function setData(){
    let data;
    if (localStorage.users != null) {
        data = JSON.parse(localStorage.users);
    } else {
        data = [];
    }
    let curUser = localStorage.getItem("username");
    for(let i = 0  ; i<data.length ; i++){
        if(data[i].username == curUser){
            
            newuser.value = data[i].username ;
            newemail.value = data[i].Email;
            newname.value = data[i].name;              
        }
    }
}
setData();

let save=document.getElementById('save');
let wrong=document.getElementById('wrong');
save.onclick=function()
{
    if(oldpass.value.length<4)
    {
        wrong.innerHTML='Old Password Must be More 4 Char'
        return;
    }else wrong.innerHTML=''

    if(newpass.value.length<4)
    {
        wrong.innerHTML='New Password Must be More 4 Char'
        return;
    }else wrong.innerHTML=''

    // get data
    let data;
    if (localStorage.users != null) {
        data = JSON.parse(localStorage.users);
    } else {
        data = [];
    }
    let curUser = localStorage.getItem("username");
    for(let i = 0  ; i<data.length ; i++){
        if(data[i].username == curUser){
            if(oldpass.value===data[i].Password)
            {
                data[i].username = newuser.value;
                data[i].email = newemail.value;
                data[i].password = newpass.value;
                data[i].name = newname.value;
                localStorage.setItem('users', JSON.stringify(data));
                alert('Save Sucssfuly');
                window.location='profile.html';
            }else wrong.innerHTML='Wrong Old Password'
        }
    }
   
   
}
