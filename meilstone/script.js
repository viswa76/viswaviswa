let play = document.querySelector(".india")
play.addEventListener("click",viswa)
function viswa(){
var namee = document.querySelector(".haa")
changename = prompt("Whats are u changing")
if (changename !== null && changename !== ''){
namee.innerHTML = changename;
}
}

let playy = document.querySelector(".pndia")
playy.addEventListener("click",viswaa)
function viswaa(){
    var subject = document.querySelector(".qaa")
    changesubject = prompt("Whats are u changing")
    if (changesubject !== null && changesubject !== ''){
    subject.innerHTML = changesubject;
    }
}


let playyy = document.querySelector(".andia")
playyy.addEventListener("click",viswaaa)
function viswaaa(){
var yourself = document.querySelector(".waa")
changeyourself = prompt("Whats are u changing")
if (changeyourself !== null && changeyourself !== ''){
yourself.innerHTML = changeyourself;
}
}


function updateInfo(id, newValue) {
    var userInput = prompt('Enter new value:');
    if (userInput !== null && userInput !== '') {
        document.getElementById(id).innerText = userInput;
    }
}

document.getElementById('btnBirthday').addEventListener('click', function () {
    updateInfo('btnBirthday', '19th September 2000');
});

document.getElementById('age').addEventListener('click', function () {
    updateInfo('age', '23');
});

document.getElementById('residence').addEventListener('click', function () {
    updateInfo('residence', 'Chennai');
});

document.getElementById('address').addEventListener('click', function () {
    updateInfo('address', '2/22A, Muthamman Nagar, Chennai');
});

document.getElementById('email').addEventListener('click', function () {
    updateInfo('email', 'viswaraja12@gmail.com');
});

document.getElementById('phone').addEventListener('click', function () {
    updateInfo('phone', '8248706708');
});

document.getElementById('freelancer').addEventListener('click', function () {
    updateInfo('freelancer', 'Available');
});






function viswa(id, placeholder) {
    var userInput = prompt('Enter new ' + placeholder + ':');
    if (userInput !== null && userInput !== '') {
        document.getElementById(id).innerText = userInput;
    }
}





    
// let prr = document.querySelector('#probtn')
// prr.addEventListener('click',aaa)
// function aaa(){
//     let a = document.querySelector('#pro1').value;
//     let b = document.querySelector('#h11')
//     h11.innerHTML=a;
// }