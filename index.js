const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let myRangeEl = document.getElementById("my-range")
let rangeEl = document.getElementById("range-el")
let numberOption = document.getElementById("check-numbers")



rangeEl.textContent = " " + myRangeEl.value

myRangeEl.addEventListener("input", (event) => {
    let newRange = event.target.value
    rangeEl.textContent = " " + newRange
})

let password1 = ""
let password2 = ""

function getRandomCharacter() {
    let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
    return randomCharacter
}

function newPassword() {
    let password = ""
    for (let i = 0; i < myRangeEl.value; i++) {
        password += getRandomCharacter(i)
    }
        return password
    }

function getRandomPassword() {
    password1 = newPassword()
    password2 = newPassword()
    password1El.textContent = password1
    password2El.textContent = password2
}

password1El.onclick = function() {
    navigator.clipboard.writeText(password1El.textContent)
}

password2El.onclick = function() {
    navigator.clipboard.writeText(password2El.textContent)
}
