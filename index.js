// Your code here

function saturdayFun(activity="roller-skate"){
return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(thing="go to the office"){
return (`This Monday, I will ${thing}.`)
}

function wrapAdjective(fancy="*"){
    return function(adjective="special") {
        return `You are ${fancy}${adjective}${fancy}!`
    }
}

const Calculator = {
    add (a, b){
    return a + b
    },
    subtract (a, b){
    return a - b
    },
    multiply (a, b){
    return a * b
    },
    divide (a, b){
    return a / b
    }  
}

function actionApplyer(start, funArr) {
    let num = start
    for (const fun of funArr) {
        num = fun(num)
    }
    return num
}
