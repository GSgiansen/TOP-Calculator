const container=document.querySelector("#container");

const display= document.createElement("div")
display.textContent="DISPLAY"
display.classList.add("display")
const numberpad=document.createElement("div")
numberpad.classList.add("numberpad")


container.appendChild(display)
container.appendChild(numberpad)

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

function operate(num1,op,num2){
    console.log(op(num1,num2))
    add
    return op(num1,num2)
}
function addToDisplay(){
    if (!displayflag){
        display.textContent=""
        displayflag=true}
    console.log(this)
    curr=display.textContent
    curr=curr+this.textContent
    display.textContent=curr
}

displayflag=false;

for(let i=0;i<10;i++){
    const button=document.createElement("button")
    button.textContent=i
    button.addEventListener("click",addToDisplay)
    numberpad.appendChild(button)


}
const addB=document.createElement("button")
addB.textContent="+"
addB.addEventListener("click",addToDisplay)

const subtractB=document.createElement("button")
subtractB.textContent="-"
subtractB.addEventListener("click",addToDisplay)


const multiplyB=document.createElement("button")
multiplyB.textContent="*"
multiplyB.addEventListener("click",addToDisplay)


const divideB=document.createElement("button")
divideB.textContent="/"
divideB.addEventListener("click",addToDisplay)

const equal=document.createElement("button")
equal.textContent="="
equal.addEventListener("click",operate)

numberpad.appendChild(addB)
numberpad.appendChild(subtractB)
numberpad.appendChild(multiplyB)
numberpad.appendChild(divideB)
numberpad.appendChild(equal)


let stack=[]



