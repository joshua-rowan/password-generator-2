let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specials = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const password1El = document.getElementById("password1-el")
const myRangeEl = document.getElementById("my-range")
const password2El = document.getElementById("password2-el")
const rangeEl = document.getElementById("range-el")
const numberToggle = document.getElementById("check-numbers")

//Okay. Now, use an empty password array, then push requested values in to select from, a getRandomCharacter Function
// instead of different functions. Push the appropriate values into the array, then pull values to return array. 
// once i have that reliably creating passwords, I can work on validating if the array has all requested values or not.

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

const lettersAndNumbers = [getRandomLetter(), getRandomNumber()]

function getRandomNumberOrLetter() {
    let randomNumberOrLetter = lettersAndNumbers[Math.floor(Math.random() * randomNumberOrLetter.length)]
    return randomNumberOrLetter
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
    } else if (numberToggle.checked) {
        for (num=0; num<numbers.length; num++)
        letters.push(numbers[num])
        console.log(letters)
        for (let i = 0; i < myRangeEl.value; i++) {
            password += getRandomLetter(i)
        }
            return password
    } else
    {
        return "Ooops"
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
