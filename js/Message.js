const table = document.getElementById("table");



function ShowMessagesTable(){
    let MessageData;
    if (localStorage.messages != null) {
        MessageData = JSON.parse(localStorage.messages);
    } else {
        MessageData = [];
    }

    if(!MessageData.length){
        table.innerHTML += '<h1 style="font-size:50px;border:1px solid yellow;text-align:center;padding:15px;border-radius:8px">There Is No Messages yet.</h1>'
        return;
    }
    let NewTable = `
     <table border="1" style="padding: 5px;margin: auto; width: 100%;">
        <tr style="padding: 5px;">
            <th style="padding:15px;">id</th>
            <th style="padding:15px;">Name</th>
            <th style="padding:15px;">Email</th>
            <th style="padding:15px;">Subject</th>
            <th style="padding:15px;">Message</th>
            <th style="padding:15px;text-align:center"> </th>
        </tr>
        `
    
    for(let i=0 ; i<MessageData.length ; i++){
            NewTable += `
            <tr style="padding: 5px;">
                <td style="padding:15px;">${i+1}</td>
                <td style="padding:15px;">${MessageData[i].name}</td>
                <td style="padding:15px;">${MessageData[i].email}</td>
                <td style="padding:15px;">${MessageData[i].subject}</td>
                <td style="padding:15px;">${MessageData[i].message}</td>
                <td style="padding:15px;">${MessageData[i].message}</td>
                <td style="padding:15px;text-align:center"><button onclick="handelDelete(${i})" style="background-color:red;color:white">Delete</button></td> 
            </tr>
            `
    }

    NewTable += '</table>';
    table.innerHTML = NewTable;
}



function handelDelete(id){
    let MessageData;
    if (localStorage.messages != null) {
        MessageData = JSON.parse(localStorage.messages);
    } else {
        MessageData = [];
    }
    let NewData = [];
    for(let i=0 ; i<MessageData.length ; i++){
        if(i==id)continue;
        NewData.push(MessageData[i]);
    }
    localStorage.setItem("messages",JSON.stringify(NewData));
    window.location.reload();
}

ShowMessagesTable();