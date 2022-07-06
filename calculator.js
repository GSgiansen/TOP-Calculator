const container=document.querySelector("#container");

const display= document.createElement("div")
display.textContent="DISPLAY"
display.classList.add("display")
const numberpad=document.createElement("div")
numberpad.classList.add("numberpad")


container.appendChild(display)
container.appendChild(numberpad)
let stack=[]
let num=""

let state=[stack,num]

const operators =new Map([
    ["+",function add(a,b){
        return a+b;
    }],
    ["-",function substract(a,b){
        return a-b;
    }],
    ["*",function multiply(a,b){
        return a*b;
    }],
    ["/",function divide(a,b){
        return a/b;
    }],
    ["%",function mod(a,b){
        return a%b;
    }]

])

function clear(){
    stack=[]
    num=""
    display.textContent=""

}
function operate(){

    stack.push(num)
    console.log(stack)
    while (stack.length!=1){
    let num1=parseFloat(stack[0])
    let op=stack[1]
    let num2=parseFloat(stack[2])
    if (num2==0){
        console.log(num2)
        display.textContent=" ZERO ERROR!!!!!"
        return "ERROR!!!!!"
    }
    let ans=operators.get(op)(num1,num2)
    stack=stack.slice(3)
    stack.splice(0,0,ans)
    console.log(stack)
    }
    display.textContent=stack[0]
    return stack[0]
}

function addToDisplay(){
    let t=num
    let tstack=Array.from(stack)
    state=[tstack,t]
    if (!displayflag){
        display.textContent=""
        displayflag=true}
    if (this.classList.contains("deci")){
        if(!deciflag){
            deciflag=true;
            num+="."
            display.textContent+="."
            return 
        }
    }
    if (this.classList.contains("op")){
        console.log(num)
        stack.push(num)
        num=""
        deciflag=false;
        stack.push(this.textContent)
    }

    curr=display.textContent
    if (!this.classList.contains("op")) num+=this.textContent
    curr=curr+this.textContent
    display.textContent=curr
    console.log(stack)
    
}

function back(){
    stack=state[0]
    num=state[1]
    a=display.textContent.slice(0,-1)
    display.textContent=a
}

const numbers=document.createElement("div")
displayflag=false;
deciflag=false;
let i=1
while (i<10){
    const line=document.createElement("div")
    for (let j=i;j<i+3;j++){
    const button=document.createElement("button")
    button.textContent=j
    button.addEventListener("click",addToDisplay)
    line.appendChild(button)
    }
    numbers.appendChild(line)
    i=i+3
}
const zerorow=document.createElement("div")
const zero=document.createElement("button")
zero.textContent=0
zero.classList.add("zero")
zero.addEventListener("click",addToDisplay)

zerorow.appendChild(zero)
const deci=document.createElement("button")
deci.textContent="."
deci.classList.add("deci")
deci.addEventListener("click",addToDisplay)





const addB=document.createElement("button")
addB.classList.add("op")
addB.textContent="+"
addB.addEventListener("click",addToDisplay)
const subtractB=document.createElement("button")
subtractB.textContent="-"
subtractB.classList.add("op")
subtractB.addEventListener("click",addToDisplay)


const multiplyB=document.createElement("button")
multiplyB.textContent="*"
multiplyB.classList.add("op")
multiplyB.addEventListener("click",addToDisplay)


const divideB=document.createElement("button")
divideB.textContent="/"
divideB.classList.add("op")
divideB.addEventListener("click",addToDisplay)

const equal=document.createElement("button")
equal.textContent="="
equal.classList.add("op")
equal.addEventListener("click",operate)

const wipe=document.createElement("button")
wipe.textContent="AC"
wipe.classList.add("op")
wipe.addEventListener("click",clear)

const mod=document.createElement("button")
mod.textContent="%"
mod.classList.add("op")
mod.addEventListener("click",addToDisplay)

const backspace=document.createElement("button")
backspace.textContent="C"
backspace.classList.add("op")
backspace.addEventListener("click",back)




const ops1=document.createElement("div")
ops1.classList.add("ops1")
const ops2=document.createElement("div")
ops2.classList.add("ops2")

ops1.appendChild(addB)
ops1.appendChild(subtractB)
ops1.appendChild(multiplyB)
ops1.appendChild(divideB)

ops2.appendChild(backspace)
ops2.appendChild(mod)
ops2.appendChild(equal)
ops2.appendChild(wipe)

zerorow.appendChild(deci)
numbers.appendChild(zerorow)
numberpad.appendChild(numbers)

numberpad.appendChild(ops1)

numberpad.appendChild(ops2)





