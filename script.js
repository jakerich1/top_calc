const screen = document.querySelector("#screenArea")

//Event handlers for numerical inputs 
const numbers = document.querySelectorAll(".num")
numbers.forEach(element => {
    element.addEventListener("click", function (event) {
        write(event.target.innerText)
    })
});

//Event handlers for operator inputs
const operators = document.querySelectorAll(".operate")
operators.forEach(element => {
    element.addEventListener("click", function (event) {
        setOperator(event.target.innerText)
    })
});

//Event handlers for operational DOM inputs
document.getElementById("clear").addEventListener("click", function () {
    clearAll()
});
document.getElementById("answer").addEventListener("click", function () {
    answer()
});

let workingObj = {

    first: "",
    second: "",
    operator: "",
    answer: function () {

        let a = parseInt(this.first)
        let b = parseInt(this.second)
        return operate(a, b, this.operator)

    }
}

function setOperator(input) {
    if (workingObj.second != "") {
        answer()
    }
    workingObj.operator = input
    console.log(workingObj)
}

function write(input) {
    if (workingObj.operator == "") {
        workingObj.first = workingObj.first + input
        display(workingObj.first)
    } else {
        workingObj.second = workingObj.second + input
        display(workingObj.second)
    }
}

function answer() {
    let answer = workingObj.answer()
    if (answer) {
        clearAll()
        workingObj.first = answer
        display(answer)
    }
}

function clearAll() {
    screen.innerHTML = "0"
    workingObj.first = ""
    workingObj.second = ""
    workingObj.operator = ""
}

function display(number) {
    screen.innerHTML = number
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {

    if (operator == "+") {
        return add(a, b)
    } else if (operator == "-") {
        return subtract(a, b)
    } else if (operator == "*") {
        return multiply(a, b)
    } else if (operator == "/") {
        return divide(a, b)
    }

}