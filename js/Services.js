let data = [
        { "name": "Alexandria", "image": "img/img/alex.jpg" },
        { "name": "Aswan", "image": "img/img/aswan.jpg" },
        { "name": "Asyut", "image": "img/img/asyut.jpg" },
        { "name": "Beni Suef", "image": "img/img/suif.jpg" },
        { "name": "Cairo", "image": "img/img/cairo.jpg" },
        { "name": "Giza", "image": "img/img/giza.jpg" },
        { "name": "Luxor", "image": "img/img/luxor.jpg" },
        { "name": "Qena", "image": "img/img/svu.jpg" },
        { "name": "Sohag", "image": "img/img/luxor.jpg" },
];

let locations = document.getElementById("locations");


for(let i =0 ; i<data.length ; i++){
    locations.innerHTML +=
    `
    <div id="card" class="card col-md-3 col-sm-12" style="height: 400px;">
        <div class="img" style="height: 50%">
            <img src="${data[i].image}" width="100%" height="100%">
        </div>
        <div class="text" style="height: 30%;"> 
            <h3>${data[i].name}</h3>
            <p>Lorem ipsum dolor sit amet<br> consectetur adipisi.</p>
        </div>
        <div center; margin-bottom: 20px;height: 30%;">
            <button><a href="hotels.html" style="font-size:20px;font-weight:bold;color:white">Show Me</a></button>
        </div>
    </div>
    `;
}