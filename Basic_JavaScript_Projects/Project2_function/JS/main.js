function myFirstFunction() { //creating my first functon
    let sentence = "i am learning";
    sentence += "a lot from this book";
    document.getElementById('btn').innerHTML = sentence; //linking my answer to the html tag with the id "str"
}

function mySecondFunction() { // creating my second function 
    let str = "This is my second function";
    let str2 = "Javascript is interesting"
    document.getElementById('btn2').innerHTML = str + str2; //concatenating and linking my answer to the html tag with the id "str2"
}