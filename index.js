const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specials = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const password1El = document.getElementById("password1-el")
const myRangeEl = document.getElementById("my-range")
const password2El = document.getElementById("password2-el")
const rangeEl = document.getElementById("range-el")
const numberToggle = document.getElementById("check-numbers")


// try looking up adding event listener for checkboxes
// or getting value or status of checkbox from js

rangeEl.textContent = " " + myRangeEl.value

myRangeEl.addEventListener("input", (event) => {
    let newRange = event.target.value
    rangeEl.textContent = " " + newRange
})

let password1 = ""
let password2 = ""

function getRandomLetter() {
    let randomLetter = letters[Math.floor(Math.random() * letters.length)]
    return randomLetter
}

function getRandomNumber() {
    let randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
    return randomNumber
}

function getRandomSpecial() {
    let randomSpecial = specials[Math.floor(Math.random() * specials.length)]
    return randomSpecial
}

console.log(getRandomNumber())
console.log(getRandomSpecial())

function newPassword() {
    let password = ""
    if (!numberToggle.checked) {
        for (let i = 0; i < myRangeEl.value; i++) {
            password += getRandomLetter(i)
        }
            return password
    } else {
        return "PasswordWithNumbersSelected"
    }
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
