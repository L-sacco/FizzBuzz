var inputMin = 1, inputMax= 1000, error = 0;

function confirm() {
    let minValue = document.getElementById("inputMin").value
    let maxValue = document.getElementById("inputMax").value

    inputMin = (minValue) ? minValue : 1
    inputMax = (maxValue) ? maxValue : 1000

    if (inputMin <= 0 || inputMin > 100) {
        error = 1
        document.getElementById("labelMin").innerHTML = "Insert a number in range 1 to 100!"
        inputMin = 1
    }
    else {
        document.getElementById("labelMin").innerHTML = ""
    }
    if (inputMax <= 1 || inputMax > 1000) {
        error = 1
        document.getElementById("labelMax").innerHTML = "Insert a number in range 2 to 1000!"
        inputMax = 1000
    }
    else {
        document.getElementById("labelMax").innerHTML = ""
    }    

    if (inputMax <= inputMin) {
        error = 2
        inputMax = 1000
    }

    if (error == 0)
    {
        document.getElementById("labelMin").innerHTML = ""
        document.getElementById("labelMax").innerHTML = ""
    } 
    else if (error == 2) {
        document.getElementById("labelMax").innerHTML = "Max number must be greater than Min!<br>If you start now it will be automatically set at 1000"
    }

    document.getElementById("confirmed").innerHTML = "The range is " + inputMin + " to " + inputMax + "<br>You can now start or change the range again!"
    error = 0;
}

function start() {
    console.log("start")
    for (let i = inputMin; i >= inputMax; i++)
    {
        if (i % 3 == 0) {
            document.getElementById("shell-text").innerHTML = "Fizz"
        }
        else if (i % 3 == 0) {
            document.getElementById("shell-text").innerHTML = "Buzz"
        }
        else {
            document.getElementById("shell-text").innerHTML = i
        }
    }
    console.log("for end")
}

