const money = document.getElementById("money");
const books = document.getElementById("books");
const client = document.getElementById("client");
const Message = document.getElementById("Message");



function CalculateTotalMoneyPerDay(){
    const date = new Date();
    let CurDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    
    // get data from localstorage
    let BookingData;
    if (localStorage.bookingData != null) {
        BookingData = JSON.parse(localStorage.bookingData);
    } else {
        BookingData = [];
    } 
    
    let TodayMoney = 0;

    for(let i=0 ; i<BookingData.length ; i++){
        if(i==1)console.log(BookingData[i].check_in,CurDate )
        if(BookingData[i].check_in == CurDate){
            TodayMoney += (+BookingData[i].number_of_nights * +BookingData[i].hotel.price_per_night); 
            console.log(TodayMoney)       
        }
    }

    money.innerHTML = TodayMoney + '$';
}



function CalculateTotalBooksPerDay(){
    const date = new Date();
    let CurDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    
    // get data from localstorage
    let BookingData;
    if (localStorage.bookingData != null) {
        BookingData = JSON.parse(localStorage.bookingData);
    } else {
        BookingData = [];
    } 
    
    let TodayBooks = 0;

    for(let i=0 ; i<BookingData.length ; i++){
        if(BookingData[i].check_in == CurDate){
            TodayBooks++;      
        }
    }

    books.innerHTML = TodayBooks ;
}



function CalculateClients(){
    const date = new Date();
    let CurDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    
    // get data from localstorage
    let data;
    if (localStorage.users != null) {
        data = JSON.parse(localStorage.users);
    } else {
        data = [];
    } 
    
    let Clients = data.length;

    client.innerHTML = Clients ;
}



function CalculateMessagesPerDay(){
    const date = new Date();
    let CurDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    
    // get data from localstorage
    let message;
    if (localStorage.messages != null) {
        message = JSON.parse(localStorage.messages);
    } else {
        message = [];
    } 
    
    let Messages = 0;

    for(let i=0 ; i<message.length ; i++){
        if(message[i].date == CurDate){
            Messages++;      
        }
    }
    
    Message.innerHTML = Messages ;
}




CalculateTotalMoneyPerDay();
CalculateTotalBooksPerDay();
CalculateClients();
CalculateMessagesPerDay();