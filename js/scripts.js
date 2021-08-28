
const defaultMin = 1, defaultMax = 200
var inputMin = defaultMin, inputMax= defaultMax, error = 0

function confirm() {
    let minValue = document.getElementById("inputMin").value
    let maxValue = document.getElementById("inputMax").value

    inputMin = parseInt((minValue) ? minValue : defaultMin)
    inputMax = parseInt((maxValue) ? maxValue : defaultMax)

    if (inputMin < defaultMin || inputMin > (defaultMax/2)) {
        document.getElementById("labelMin").innerHTML = "Insert a number in range 1 to 100!"
        inputMin = defaultMin
        error = 2
    } 
    else document.getElementById("labelMin").innerHTML = ""

    if (inputMax <= defaultMin || inputMax > defaultMax) {
        document.getElementById("labelMax").innerHTML = "Insert a number in range 2 to 200!"
        inputMax = defaultMax
        error = 2
    } 
    else document.getElementById("labelMax").innerHTML = ""

    if (inputMax <= inputMin) {
        error = 1
        inputMax = defaultMax
    }

    if (error == 0)
    {
        document.getElementById("labelMin").innerHTML = ""
        document.getElementById("labelMax").innerHTML = ""
    } 
    else if (error == 1) {
        document.getElementById("labelMax").innerHTML = "Max number must be greater than Min!<br>If you start now it will be automatically set at 200"
    }

    document.getElementById("confirmed").innerHTML = "The range is " + inputMin + " to " + inputMax + "<br>You can now start or change the range again!"
    error = 0;
}

function start(opt) {
    document.getElementById("shell-screen").innerHTML = ""

    for (let i = inputMin; i <= inputMax; i++)
    {
        console.log(i)
        if (i % 3 == 0) {
            document.getElementById("shell-screen").innerHTML += "<div class='shell-text'>" + "Fizz" + "</div>"
        }
        else if (i % 5 == 0) {
            document.getElementById("shell-screen").innerHTML += "<div class='shell-text'>" + "Buzz" + "</div>"
        }
        else if (i % 7 == 0) {
            document.getElementById("shell-screen").innerHTML += "<div class='shell-text'>" + "Foo" + "</div>"
        }
        else if (i % 11 == 0) {
            document.getElementById("shell-screen").innerHTML += "<div class='shell-text'>" + "Boo" + "</div>"
        }
        else if (i % 7 == 0 && i % 11 == 0) {
            document.getElementById("shell-screen").innerHTML += "<div class='shell-text'>" + "FooBoo" + "</div>"
        }
        else {
            document.getElementById("shell-screen").innerHTML += "<div class='shell-text'>" + i + "</div>"
        }
    }
}
