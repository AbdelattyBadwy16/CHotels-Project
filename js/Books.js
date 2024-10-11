const table = document.getElementById("table");



function ShowBookingTable(){
    let BookingData;
    if (localStorage.bookingData != null) {
        BookingData = JSON.parse(localStorage.bookingData);
    } else {
        BookingData = [];
    }

    if(!BookingData.length){
        table.innerHTML += '<h1 style="font-size:50px;border:1px solid yellow;text-align:center;padding:15px;border-radius:8px">There Is No Books yet.</h1>'
        return;
    }
    let NewTable = `
     <table border="1" style="padding: 5px;margin: auto; width: 100%;">
        <tr style="padding: 5px;">
            <th style="padding:15px;">id</th>
            <th style="padding:15px;">Client</th>
            <th style="padding:15px;">Room</th>
            <th style="padding:15px;">Check_in</th>
            <th style="padding:15px;">Check_out</th>
            <th style="padding:15px;">Cost</th>
            <th style="padding:15px;text-align:center">End Book</th>
        </tr>
        `
    
    for(let i=0 ; i<BookingData.length ; i++){
        if(BookingData[i].hotel.name == "South Valley University Hostel"){
            let date = new Date(BookingData[i].check_in);
            NewTable += `
            <tr style="padding: 5px;">
                <td style="padding:15px;">${i+1}</td>
                <td style="padding:15px;">${BookingData[i].user}</td>
                <td style="padding:15px;">${BookingData[i].room}</td>
                <td style="padding:15px;">${BookingData[i].check_in}</td>
                <td style="padding:15px;">${date.getFullYear()}-${date.getMonth()+1}-${+date.getDate() + +BookingData[i].number_of_nights}</td>
                <td style="padding:15px;">${+BookingData[i].number_of_nights * +BookingData[i].hotel.price_per_night}$</td> 
                <td style="padding:15px;text-align:center"><button onclick="handelDelete(${i})" style="background-color:red;color:white">Delete</button></td> 
            </tr>
            `
        }
    }

    NewTable += '</table>';
    table.innerHTML = NewTable;
}



function handelDelete(id){
    let BookingData;
    if (localStorage.bookingData != null) {
        BookingData = JSON.parse(localStorage.bookingData);
    } else {
        BookingData = [];
    }
    let NewData = [];
    for(let i=0 ; i<BookingData.length ; i++){
        if(i==id)continue;
        NewData.push(BookingData[i]);
    }
    localStorage.setItem("bookingData",JSON.stringify(NewData));
    window.location.reload();
}

ShowBookingTable();