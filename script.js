function generate(){
    let com = prompt("please enter a Number", "10");
let letters = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890!@#$%^&*()";

var pass = "";

for(var i = 0; i<=com; i++){
    pass = pass + letters.charAt(Math.floor(Math.random() * Math.floor(letters.length - 1)))
}

document.getElementById("display").value=pass;

document.getElementById("lastNums").innerHTML += password + "<br />"

}