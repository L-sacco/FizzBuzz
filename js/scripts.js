
// Global variables
var modal = document.getElementById("rulesModal");
var closeBtn = document.getElementById("closeBtn");
const defaultMin = 1, defaultMax = 200
var min = defaultMin, max= defaultMax, error = 0

// Confirm the range
function confirm() {
    let labelMin = document.getElementById("labelMin")
    let labelMax = document.getElementById("labelMax")
    let inputMin = document.getElementById("inputMin")
    let inputMax = document.getElementById("inputMax")

    let minValue = inputMin.value
    let maxValue = inputMax.value

    min = parseInt((minValue) ? minValue : defaultMin)
    max = parseInt((maxValue) ? maxValue : defaultMax)

    if (min < defaultMin || min > (defaultMax/2)) {
        labelMin.innerHTML = "Insert a number in range 1 to 100!"
        min = defaultMin
        error = 2
    } 
    else labelMin.innerHTML = ""

    if (max <= defaultMin || max > defaultMax) {
        labelMax.innerHTML = "Insert a number in range 2 to 200!"
        max = defaultMax
        error = 2
    } 
    else labelMax.innerHTML = ""

    if (max <= min) {
        error = 1
        max = defaultMax
    }

    if (error == 0)
    {
        labelMin.innerHTML = ""
        labelMax.innerHTML = ""
    } 
    else if (error == 1) {
        labelMax.innerHTML = "Max number must be greater than Min!<br>If you start now it will be automatically set at 200"
    }

    document.getElementById("confirmed").innerHTML = "The range is " + min + " to " + max + "<br>You can now start or change the range again!"
    error = 0;
}

// Start the FizzBuzz game
function start(opt) {

    let shell = document.getElementById("shell-screen")

    shell.innerHTML = "" // clean the shell

    for (let i = min; i <= max; i++)
    {
        if (i % 3 == 0 && i % 5 == 0) {
            shell.innerHTML += "<div class='shell-text'>" + smallBig(i) + "FizzBuzz FTW" + "</div>"
        } else if (i % 3 == 0) {
            // if opt is 2 fizz & buzz are inverted
            shell.innerHTML += (opt == 1) 
                ? "<div class='shell-text'>" + smallBig(i) + "Fizz GG" + "</div>"
                : "<div class='shell-text'>" + smallBig(i) + "Buzz GG" + "</div>"
        } else if (i % 5 == 0) {
            // if opt is 2 fizz & buzz are inverted
            shell.innerHTML += (opt == 1) 
                ? "<div class='shell-text'>" + smallBig(i) + "Buzz GG" + "</div>"
                : "<div class='shell-text'>" + smallBig(i) + "Fizz GG" + "</div>"
        } else if (i % 7 == 0 && i % 11 == 0) {
            shell.innerHTML += "<div class='shell-text'>" + smallBig(i) + "FooBoo" + "</div>"
        } else if (i % 7 == 0) {
            shell.innerHTML += "<div class='shell-text'>" + smallBig(i) + "Foo" + "</div>"
        } else if (i % 11 == 0) {
            shell.innerHTML += "<div class='shell-text'>" + smallBig(i) + "Boo" + "</div>"
        } else {
            shell.innerHTML += "<div class='shell-text'>" + smallBig(i) + (i + "</div>")
        }
    }
}

function smallBig(i) {
    if (i < 16) return "(Small) "
    else if (i > 95) return "(Big) "
    else return ""
}

// Modal start

// Variables reminder
// modal = document.getElementById("rulesModal");  
// closeBtn = document.getElementById("closeBtn");

function showRules() {
    modal.style.display = "block";
}
function closeRules() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Modal end