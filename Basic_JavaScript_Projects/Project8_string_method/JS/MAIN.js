function fullMsg() { //this function concatenate variables
    let sentence_1 = "This is my book";
    let sentence_2 = "and i love it";
    let sentence_3 = "you can borrow it";
    let sentence_4 = "because i m a cheerful giver";

    msg = sentence_1.concat(sentence_2, sentence_3, sentence_4);
    document.getElementById("msg").innerHTML = msg;
}

function slice_function() {//function to return slice functon
    let msg = "All work and no play makes Johnny a dull boy";
    let slice = msg.slice(25, 33);
    document.getElementById("slice").innerHTML = slice;
}

function to_string() { // this funtion covert number to string
    let num = 204 + "15";
    document.getElementById("to_string").innerHTML = num.toString();
}

function to_precise() { // this funtion covert number to string
    let num = 203.5554554545
    document.getElementById("to_precise").innerHTML = num.toPrecision(7);
}