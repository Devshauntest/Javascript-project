function typeOf() {
    let A = document.getElementById("not")
    A.innerHTML = (typeof "Fire"); // utilizing the type of keyword
}

function Coercion() {
    let A = document.getElementById("not")
    A.innerHTML = ("15" + 5); //coercion 
}

function Infi() {
    let A = document.getElementById("not")
    A.innerHTML = (2E400); //infinity
}

function NegInfi() {
    let A = document.getElementById("not")
    A.innerHTML = (-2E400); //negative infinity
}

function boolFalse() {
    let A = document.getElementById("not")
    A.innerHTML = (4 > 10); //boolean to return false
}

function boolTrue() {
    let A = document.getElementById("not")
    A.innerHTML = (4 < 10); //boolean to return true
}


console.log(122)

function compFalse() {
    let A = document.getElementById("not")
    A.innerHTML = (15 == 10 + 2); // return false using the comparative operator
}

function sameValue() {
    let A = 13;
    let B = 13;
    // returns true. same data type and same value
    let ouT = document.getElementById("not")
    ouT.innerHTML = (A === B);
}

function ab() {
    let ouT = document.getElementById("not")
    let A = 13;
    let B = "12";
    ouT.innerHTML = (A === B) //return false. different datatype and  different value 
}

function abcd() {
    let ouT = document.getElementById("not")
    let A = 12;
    let B = "12";
    ouT.innerHTML = (A === B) //false. different datatype but the same value
}

function abcde() {
    let ouT = document.getElementById("not")
    let A = 13;
    let B = 12;
    ouT.innerHTML = (A === B) // false. same datatype but dffrent value
}

function logicalAnd() {
    let A = document.getElementById("not")
    A.innerHTML = (30 > 10 && 20 > 5) // and operator displays true
}
function logicalAnd2() {
    let A = document.getElementById("not")
    A.innerHTML = (30 > 10 && 20 > 30) // and operator displays true
}

function logicalOr() {
    let A = document.getElementById("not")
    A.innerHTML = (30 > 10 || 20 > 30) // OR operator displays true
}

function logicalOr2() {
    let A = document.getElementById("not")
    A.innerHTML = (30 < 10 || 20 < 5) // OR operator displays false
}

function not_function() { //this not operator displays true
    let A = document.getElementById("not")
    A.innerHTML = !(20 > 30)
}

function not_function2() { //this not operator displays false
    let A = document.getElementById("not")
    A.innerHTML = !(20 < 30)
}