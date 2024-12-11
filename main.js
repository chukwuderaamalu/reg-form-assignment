let fName = document.querySelector(`.js-fname`);
let emAddress = document.querySelector(`.js-emaddress`);
let phNumber = document.querySelector(`.js-phnumber`);
let message = document.querySelector(`.js-country`);
let submitted = document.querySelector(`.submitted`);
let fullname = document.querySelector(`.fullname`);
let number = document.querySelector(`.number`);
let email = document.querySelector(`.email`);
let data = document.querySelector(`.haba`);
let bott = document.querySelector(`.bott`);




function myGirl () {
    

     if (bott.innerHTML === "Submit") {
        bott.innerHTML = `Submitted`
        fullname.innerHTML = ` Full Name: ${fName.value}`
    email.innerHTML =  `Email Address : ${emAddress.value}`
    number.innerHTML = `Phone Number : ${phNumber.value}`
data.innerHTML = ` Hi,${fName.value} your details:`
    
     submitted.innerHTML = `You have successfully submitted your data.Thank you!`
     alert(`Click "OK" to continue!`)
     }
     else{
        bott.innerHTML = "Submit"
        fName.value = ``
        emAddress.value = ``
        phNumber.value = ``
        data.innerHTML = `No details submitted yet!`
        fullname.innerHTML = `Please fill the form!`
        email.innerHTML = ``
        number.innerHTML = ``
        submitted.innerHTML = ``
     }
}