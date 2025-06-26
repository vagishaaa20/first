let random=Math.random()

let a=prompt("enter first no.")
let b=prompt("enter second no.")
let c=prompt("enter operation")

let obj= {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",
}
if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
