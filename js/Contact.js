const name = document.getElementById("contactName")
const email = document.getElementById("contactEmail")
const subject = document.getElementById("contactSubject")
const message = document.getElementById("contactMessage")

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    // get data from localstorage
    let data;
    if (localStorage.messages != null) {
        data = JSON.parse(localStorage.messages);
    } else {
        data = [];
    }

    data.push({
        name:name.value,
        email : email.value,
        subject :subject.value,
        message : message.value
    })
    localStorage.setItem("messages",JSON.stringify(data));

    // free input

    alert("Message sent succssfully.");
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
})