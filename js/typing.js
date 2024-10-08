let a='Amazing Hotels' , b='Best Price', c='Good Services';

let index=1;
let temp=0;
function typing(){
    if(temp==0){
    document.getElementById('typing').innerHTML = a.slice(0,index++);
    if(index>a.length){
        index=0;
        temp=1;
    }
    }else if(temp==1){
        document.getElementById('typing').innerHTML = b.slice(0,index++);
        if(index>b.length){
            index=0;
            temp=2;
        }
    }else if(temp==2){
        document.getElementById('typing').innerHTML = c.slice(0,index++);
        if(index>c.length){
            index=0;
            temp=0;
        }
    }
}

setInterval(function(){
    typing();
},200);

