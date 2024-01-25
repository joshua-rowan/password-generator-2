const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

let password1 = ""
let password2 = ""

function getRandomCharacter() {
    let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
    console.log(randomCharacter)
    return randomCharacter
}

function newPassword() {
    let password = getRandomCharacter()
        return password
    }

function getRandomPassword() {
    password1 = newPassword()
    password2 = newPassword()
    password1El.textContent = password1
    password2El.textContent = password2
}

getRandomCharacter()