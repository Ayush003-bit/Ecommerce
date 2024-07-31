


let User = document.getElementById("user");
let button = document.getElementById("btn");
let cart = document.getElementById("cart");
let collection1 = document.getElementById("Collection1");
let Product = document.getElementById("product");
let Women = document.getElementById("women");
let Fashion = document.getElementById("fashion");
let Cart2 = document.getElementById("cart2");
let Cart3 = document.getElementById("cart3");
let list1 = document.getElementById("lists1");
let list2 = document.getElementById("lists2");
let list3 = document.getElementById("lists3");
let list4 = document.getElementById("lists4");
let list5 = document.getElementById("lists5");
let list6 = document.getElementById("lists6");
let list7 = document.getElementById("lists7");
let list8 = document.getElementById("lists8");
let list9 = document.getElementById("lists9");
let list10 = document.getElementById("lists10");
let list11 = document.getElementById("lists11");

list1.addEventListener("click", function(){
    list1 = window.open("https://nykaa.com/sp/makeup-native/makeup", "");
})

list2.addEventListener("click", function(){
    list2 = window.open("https://nykaa.com/sp/skin-native-desktop/skin", "");
})

list3.addEventListener("click", function(){
    list3 = window.open("https://nykaa.com/sp/hair-native/hair", "");
})

list4.addEventListener("click", function(){
    list4 = window.open("https://nykaa.com/sp/appliances-native/appliances", "");
})

list5.addEventListener("click", function(){
    list5 = window.open("https://nykaa.com/sp/bath-and-body-native/bath-and-body", "");
})

list7.addEventListener("click", function(){
    list7 = window.open("https://nykaa.com/sp/mom-and-baby-native/mom-and-baby", "");
})

list6.addEventListener("click", function(){
    list6 = window.open("https://nykaa.com/sp/natural-native/natural", "");
})

list8.addEventListener("click", function(){
    list8 = window.open("https://nykaa.com/sp/wellness-native/wellness", "");
})

list9.addEventListener("click", function(){
    list9 = window.open("https://nykaa.com/sp/men-store/men-store", "");
})

list10.addEventListener("click", function(){
    list10 = window.open("https://nykaa.com/sp/fragrance-native/fragrance-store", "");
})

list11.addEventListener("click", function(){
    list11 = window.open("https://nykaa.com/sp/nb-popup-homepage/popup-homepage", "");
})



function show() {
     User.style.transition = "all 0.5s ease-in-out";
    User.style.padding = "10px 10px";
    User.style.backgroundColor = "grey";
    User.style.color = "white";
    User.style.borderRadius = "40px";
}

User.addEventListener("mouseout", function(){
    User.style.transition = "all 0.5s ease-in-out";
    User.style.backgroundColor = "white";
    User.style.borderRadius = "0px";
})

function openWindow() {
    cart = window.open("https://nykaafashion.com", "");
}


function info() {
    alert("Please fill the form below");
}

Product.addEventListener("mouseover", function(){
    Product.style.transition = "all 0.5s ease-in-out";
    Product.style.boxShadow = "0px 0px 4px grey";
})

Product.addEventListener("mouseout", function(){
    Product.style.transition = "all 0.5s ease-in-out";
    Product.style.boxShadow = "none";
})

Women.addEventListener("mouseover", function(){
    Women.style.transition = "all 0.5s ease-in-out";
    Women.style.boxShadow = "0px 0px 4px grey";
})

Women.addEventListener("mouseout", function(){
    Women.style.transition = "all 0.5s ease-in-out";
    Women.style.boxShadow = "none";
})

Fashion.addEventListener("mouseover", function(){
    Fashion.style.transition = "all 0.5s ease-in-out";
    Fashion.style.boxShadow = "0px 0px 4px grey";
})

Fashion.addEventListener("mouseout", function(){
    Fashion.style.transition = "all 0.5s ease-in-out";
    Fashion.style.boxShadow = "none";
})

Cart2.addEventListener("mouseover", function(){
    Cart2.style.backgroundColor = "black";
})

Cart2.addEventListener("mouseout", function(){
    Cart2.style.backgroundColor = "orangered";
})

Cart2.addEventListener("click", function(){
    alert("Adding to cart Sucessfully");
})

Cart3.addEventListener("mouseover", function(){
    Cart3.style.backgroundColor = "black";
})

Cart3.addEventListener("mouseout", function(){
    Cart3.style.backgroundColor = "orangered";
})

Cart3.addEventListener("click", function(){
    prompt("Do you want to add in your cart?");
})



let Name = document.getElementById("name-error");
let Phone = document.getElementById("phone-error");
let Mail = document.getElementById("mail-error");
let Msg = document.getElementById("msg-error");

function validateUsername() {

    let Uname = document.getElementById("name").value;

    if (Uname.length == 0) {
        Name.innerHTML = " *Name is Required ";
        Name.style.transition = "all 0.5s ease-in-out";
        Name.style.color = "white";
        Name.style.backgroundColor = "red";
        Name.style.borderRadius = "5px";
        Name.style.boxShadow = "0px 0px 5px red";
        Name.style.paddingLeft = "2%"
        Name.style.padding = "5px 10px";
       
        return false;
    }

    if (Uname.length < 5) {
        Name.innerHTML = "*Write full Name";
        Name.style.transition = "all 0.5s ease-in-out";
        Name.style.color = "white";
        Name.style.backgroundColor = "red";
        Name.style.borderRadius = "5px";
        Name.style.boxShadow = "0px 0px 5px red";
        Name.style.paddingLeft = "2%"
        Name.style.padding = "5px 10px";
       
        return false;
    }

    else {
       Name.innerHTML = "Valid";
       Name.style.transition = "all 0.5s ease-in-out";
       Name.style.color = "white";
       Name.style.borderRadius = "5px";
       Name.style.boxShadow = "0px 0px 5px green";
       Name.style.paddingLeft = "2%"
       Name.style.padding = "5px 10px";
       Name.style.backgroundColor = "green";
       return true;
    }
}

function validateUserphone() {

    let UPhone = document.getElementById("phone").value;

    if (UPhone.length == 0) {
        Phone.innerHTML = " *Mob is required ";
        Phone.style.transition = "all 0.5s ease-in-out";
        Phone.style.color = "white";
        Phone.style.backgroundColor = "red";
        Phone.style.borderRadius = "5px";
        Phone.style.boxShadow = "0px 0px 5px red";
        Phone.style.paddingLeft = "2%"
        Phone.style.padding = "5px 10px";
        return false;
    }

    if (UPhone.length != 10) {
        Phone.innerHTML = " !Invalid Mob";
        Phone.style.transition = "all 0.5s ease-in-out";
        Phone.style.color = "white";
        Phone.style.backgroundColor = "red";
        Phone.style.borderRadius = "5px";
        Phone.style.boxShadow = "0px 0px 5px red";
        Phone.style.paddingLeft = "2%"
        Phone.style.padding = "5px 10px";
        return false;
    }

    

    else {
        Phone.innerHTML = "Valid";
        Phone.style.transition = "all 0.5s ease-in-out";
        Phone.style.backgroundColor = "green";
        Phone.style.borderRadius = "5px";
        Phone.style.boxShadow = "0px 0px 5px green";
        Phone.style.paddingLeft = "2%"
        Phone.style.padding = "5px 10px";
        Phone.style.color = "white";
        return true;
    }
}

function validateMail() {

    let Umail = document.getElementById("Email").value;

    if (Umail.length == 0) {
        Mail.innerHTML = " *Email is Required";
        Mail.style.transition = "all 0.5s ease-in-out";
        Mail.style.color = "white";
        Mail.style.backgroundColor = "red";
        Mail.style.borderRadius = "5px";
        Mail.style.boxShadow = "0px 0px 5px red";
        Mail.style.paddingLeft = "2%";
        Mail.style.padding = "5px 10px";
        return false;
    }

    if (Umail.length > 30) {
        Mail.innerHTML = " *Length is to long";
        Mail.style.transition = "all 0.5s ease-in-out";
        Mail.style.color = "white";
        Mail.style.backgroundColor = "red";
        Mail.style.borderRadius = "5px";
        Mail.style.boxShadow = "0px 0px 5px red";
        Mail.style.paddingLeft = "2%";
        Mail.style.padding = "5px 10px";
        return false;
    }

    if (Umail.length < 15) {
        Mail.innerHTML = " *Mail is to short";
        Mail.style.transition = "all 0.5s ease-in-out";
        Mail.style.color = "white";
        Mail.style.backgroundColor = "red";
        Mail.style.borderRadius = "5px";
        Mail.style.boxShadow = "0px 0px 5px red";
        Mail.style.paddingLeft = "2%";
        Mail.style.padding = "5px 10px";
        return false;
    }

    else {
        Mail.innerHTML = "Valid";
        Mail.style.transition = "all 0.5s ease-in-out";
        Mail.style.color = "white";
        Mail.style.backgroundColor = "green";
        Mail.style.borderRadius = "5px";
        Mail.style.boxShadow = "0px 0px 5px green";
        Mail.style.paddingLeft = "2%";
        Mail.style.padding = "5px 10px";
        return true;
    }


}


function validatemsg() {

    let Umsg = document.getElementById("msg").value;

    if (Umsg.length == 0) {

        Msg.innerHTML = " *Msg is Required";
        Msg.style.transition = "all 0.5s ease-in-out";
        Msg.style.color = "white";
        Msg.style.backgroundColor = "red";
        Msg.style.borderRadius = "5px";
        Msg.style.boxShadow = "0px 0px 5px red";
        Msg.style.paddingLeft = "2%";
        Msg.style.padding = "5px 10px";
        return false;
    }

    if (Umsg.length < 40) {
        Msg.innerHTML = "*length is to short";
        Msg.style.transition = "all 0.5s ease-in-out";
        Msg.style.color = "white";
        Msg.style.backgroundColor = "red";
        Msg.style.borderRadius = "5px";
        Msg.style.boxShadow = "0px 0px 5px red";
        Msg.style.paddingLeft = "2%";
        Msg.style.padding = "5px 10px";
        return false;
    }

    if (Umsg.length > 200) {
        Msg.innerHTML = "*length is to long";
        Msg.style.transition = "all 0.5s ease-in-out";
        Msg.style.color = "white";
        Msg.style.backgroundColor = "red";
        Msg.style.borderRadius = "5px";
        Msg.style.boxShadow = "0px 0px 5px red";
        Msg.style.paddingLeft = "2%";
        Msg.style.padding = "5px 10px";
        return false;
    }

    else {
        Msg.innerHTML = "Valid";
        Msg.style.transition = "all 0.5s ease-in-out";
        Msg.style.color = "white";
        Msg.style.backgroundColor = "green";
        Msg.style.borderRadius = "5px";
        Msg.style.boxShadow = "0px 0px 5px green";
        Msg.style.paddingLeft = "2%";
        Msg.style.padding = "5px 10px";
        return true;
    }
}

function validateAll() {

    

    if (!validateUsername() || !validateUserphone()  || !validateMail()  || !validatemsg()) {

        alert("Please fill the following Details");
        return false;
    }

    else {
        alert("Form submitted Sucessfully");
        return true;
    }
}

