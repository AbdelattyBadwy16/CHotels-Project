

// get data from localstorage
let BookingData;
if (localStorage.bookingData != null) {
    BookingData = JSON.parse(localStorage.bookingData);
} else {
    BookingData = [];
} 


my_Carts = [];


const curUser = localStorage.getItem("username");

for(let i=0 ;i<BookingData.length ; i++){
    if(curUser == BookingData[i].user){
        my_Carts.push(BookingData[i])
    }
}   


const cards = document.getElementById("cards");

if(!my_Carts.length){
    cards.innerHTML = `
        <div style="border : 1px solid black;padding:10px;display:flex; justify-content: center; margin: 50px auto; display: flex ;background-color: white;border-radius: 5px; width: 100%;color:black;font-size:50px;text-align: center;">
           <h1>No Cards Have until yet.</h1>
        </div>
    `
}

for(let i=0 ; i<my_Carts.length ; i++){
    let date = new Date(my_Carts[i].check_in);
    const card = `
        <div style="border : 1px solid black; margin: 50px auto; display: flex ;background-color: white;border-radius: 5px; width: 100%;">
          <img src="${my_Carts[i].hotel.images[0]}" width="200px" style="border-radius: 5px;"/>
          <div style="color: black; padding: 20px;display: flex; flex-direction: column;justify-content: center; gap:20px">
            <h5>Hotel Name : ${my_Carts[i].hotel.name}</h5>
            <h5>Room : ${my_Carts[i].room}</h5>
          </div>
          <div style="color: black; padding: 20px;display: flex; flex-direction: column;justify-content: center; gap:20px">
            <h5>Check_in : ${my_Carts[i].check_in}</h5>
            <h5>Check_out : ${date.getFullYear()}-${date.getMonth()+1}-${+date.getDate() + +my_Carts[i].number_of_nights}</h5>
          </div>
        </div>
    `
    cards.innerHTML += card;
}