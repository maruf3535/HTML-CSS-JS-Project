
var calculations = document.getElementById("calculation")
var firstInput = document.getElementById("firstInput")
var secondInput = document.getElementById("secondInput")
var resultOutput = document.getElementById("resultOutput")
var sign = document.getElementById("sign")
var resultPra = document.getElementById("resultPra")

function selected(){
    if (calculations.value == "sum"){
        resultPra.innerHTML = "You want to Sum"
        sign.innerHTML = "+"
    }
    else if (calculations.value == "minus"){
        resultPra.innerHTML = "You want to Minus"
        sign.innerHTML = "-"
    }
    else if (calculations.value == "mul"){
        resultPra.innerHTML = "You want to Multipication"
        sign.innerHTML = "x"
    }
    else if (calculations.value == "division"){
        resultPra.innerHTML = "You want to Division"
        sign.innerHTML = "/"
    }
    else{
        resultPra.innerHTML = "Please Select a option..."
        sign.innerHTML = "+"
    }
}

function submit(){
    if (calculations.value == "sum"){
        let a = parseInt(firstInput.value)
        let b = parseInt(secondInput.value)
        resultOutput.value = (a + b)
        resultPra.innerHTML = `The result is: ${(a + b)}`
    }
    else if (calculations.value == "minus"){
        let a = parseInt(firstInput.value)
        let b = parseInt(secondInput.value)
        resultOutput.value = (a - b)
        resultPra.innerHTML = `The result is: ${(a - b)}`
    }
    else if (calculations.value == "mul"){
        let a = parseInt(firstInput.value)
        let b = parseInt(secondInput.value)
        resultOutput.value = (a * b)
        resultPra.innerHTML = `The result is: ${(a * b)}`
    }
    else if (calculations.value == "division"){
        let a = parseInt(firstInput.value)
        let b = parseInt(secondInput.value)
        resultOutput.value = (a / b)
        resultPra.innerHTML = `The result is: ${(a / b)}`
    }
    else{
        resultPra.innerHTML = "You don't calculate anything..."
        resultOutput.value = 0
    }
}



