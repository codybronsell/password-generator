// Assignment code here
function randomint(min, max) {
    return Math.floor(Math.random()*(max - min) + min )

}

function getrandomitem(list) {
    return list[randomint(0, list.length - 1)]
}

function generatePassword (){
  while (true) {
    var passsize = window.prompt("pick a password length from 8 to 128 characters");
    if (isFinite (passsize) && (passsize >= 8) && (passsize <= 128) ){
        break;  
    }else{
        window.alert( "you didnt enter a vaild number please try again.");
    }
    }
    var inlow = window.confirm("would you like lowercase letters to be included?")       
    var inupper = window.confirm("would you like to include uppercase letters?")
    var innumeric = window.confirm("would you like to include numbers?")
    var inspecial = window.confirm("would you like to include special charecter?")
    

var numlist = ["1","2","3","4","5","6","7","8","9"]
var upperlist = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowlist = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var speclist = ["!","@","#","$","%","^","&","*","+","?"]
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);