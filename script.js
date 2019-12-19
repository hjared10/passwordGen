function generate(){
    var com = prompt("please enter a Number", "10");

    var low = confirm("lower case?")
    var upper = confirm("upper case characters?")
    var special = confirm("special characters?")
    var num = confirm("numbers?")

console.log(low)
console.log(upper)
console.log(special)
console.log(num)

var letters = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890!@#$%^&*()";

var lowc = "qwertyuioplkjhgfdsazxcvbnm"

var upc = "QWERTYUIOPLKJHGFDSAZXCVBNM"

var spec = "!@#$%^&*()"

var numc = "1234567890"

var total = ""

var passw = ""

if (low="true") {
    passw = passw + lowc
    }

if (upper="true") {
   passw = passw + upc
    }

if (special="true") {
    passw = passw + spec
    }

if (num="true") {
    passw = passw + numc
    }

console.log(numc)

var pass = "";

for(var i = 0; i<=com; i++){
    pass = pass + passw.charAt(Math.floor(Math.random() * Math.floor(passw.length - 1)))
}

console.log(pass)

document.getElementById("display").value=pass;

}

function copypass () {
    document.getElementById("display").select();
    document.execCommand("copy");
    alert("Password Copied!")
}
