function add() {
    let A = 4 + 2;
    document.getElementById("Math").innerHTML = A;
}

function sub() {
    let A = 4 - 2;
    document.getElementById("Math2").innerHTML = A;
}

function mult() {
    let A = 4 * 2;
    document.getElementById("Math3").innerHTML = "4 * 2 = " + A;
}

function div() {
    let A = 4 / 2;
    document.getElementById("Math4").innerHTML = "4 / 2 = " + A;
}

function all() {
    let A = (10 + 20) * 5 / 3;
    document.getElementById("math5").innerHTML = A;
}

function modulus() {
    let A = 25 % 6;
    document.getElementById("mod").innerHTML = A;
}

function negativeOperator() {
    let A = 10;
    document.getElementById("neg").innerHTML = -A;
}

function increment() {
    let A = 5;
    A++;
    document.getElementById("math6").innerHTML = A;
}

function decrement() {
    let A = 5;
    A--;
    document.getElementById("math7").innerHTML = A;
}

function randy() {
    let A = Math.random() * 14;
    document.getElementById("math8").innerHTML = A;
}

