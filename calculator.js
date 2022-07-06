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
    if (!displayflag){
        display.textContent=""
        displayflag=true}
    if (this.classList.contains("op")){
        console.log(num)
        stack.push(num)
        num=""
        deciflag=false;
        stack.push(this.textContent)
    }
    if (this.classList.contains("deci")){
        if(!deciflag){
            deciflag=true;
            num+="."
            display.textContent+="."
            return 
        }
    }
    curr=display.textContent
    if (!this.classList.contains("op")) num+=this.textContent
    curr=curr+this.textContent
    display.textContent=curr
    console.log(stack)
}

displayflag=false;
deciflag=false;
for(let i=0;i<10;i++){
    const button=document.createElement("button")
    button.textContent=i
    button.addEventListener("click",addToDisplay)
    numberpad.appendChild(button)


}



const addB=document.createElement("button")
addB.classList.add("op")
addB.textContent="+"
addB.addEventListener("click",addToDisplay)
addB.value="+"
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
equal.addEventListener("click",operate)

const wipe=document.createElement("button")
wipe.textContent="CLEAR"
wipe.addEventListener("click",clear)

const deci=document.createElement("button")
deci.textContent="."
deci.classList.add("deci")
deci.addEventListener("click",addToDisplay)

numberpad.appendChild(addB)
numberpad.appendChild(subtractB)
numberpad.appendChild(multiplyB)
numberpad.appendChild(divideB)
numberpad.appendChild(deci)
numberpad.appendChild(equal)

numberpad.appendChild(wipe)





