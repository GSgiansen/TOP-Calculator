const container=document.querySelector("#container");

const display= document.createElement("div")
display.textContent="DISPLAY"
display.classList.add("display")
const numberpad=document.createElement("div")
numberpad.classList.add("numberpad")


container.appendChild(display)
container.appendChild(numberpad)

function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
const operators =[
    {"+": function add(a,b){
        return a+b;
    }},
    {"-":function substract(a,b){
        return a-b;
    }
},
    {"*":function multiply(a,b){
        return a*b;
    }},
    {"/":function divide(a,b){
        return a/b;
    }}

]

function operate(num1,num2,op){
    return op(num1,num2)
}

for(let i=0;i<10;i++){
    const button=document.createElement("button")
    button.textContent=i
    numberpad.appendChild(button)

}
const addB=document.createElement("button")
addB.textContent="+"

const subtractB=document.createElement("button")
subtractB.textContent="-"

const multiplyB=document.createElement("button")
multiplyB.textContent="*"

const divideB=document.createElement("button")
divideB.textContent="/"

numberpad.appendChild(addB)
numberpad.appendChild(subtractB)
numberpad.appendChild(multiplyB)
numberpad.appendChild(divideB)


