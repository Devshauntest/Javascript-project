let instrument = ["Guitar", "Drums", "Flute", "Recorder", "Trumpet", "Saxophone"]
let T;
let msg = "";

function while_Loop() { //the while loop returns counting of number from 1 - 10
    let Digit = "";
    let i = 0;
    while (i < 10) {
        Digit += + i;
        i++;

    }
    document.getElementById("student").innerHTML = Digit;
}



function for_loop() {   ////for loop that returns list of instrument
    for (T = 0; T < instrument.length; T++) {
        msg += instrument[T] + "</br>";
    }
    document.getElementById("list_of_instrument").innerHTML = msg;
}


function array_function() {// this consist of an array an object
    let msg = '';
    let colours = []
    colours[0] = 'red';
    colours[1] = 'blue';
    colours[2] = 'green';
    colours[3] = 'yellow';
    colours[4] = 'purple'
    colours[5] =
        msg += "My favourites colours are " + colours[2] + " and" + colours[3]
    document.getElementById("array").innerHTML = msg;
}

let student = { // this object describes a student
    name: "Racheal",
    age: 13,
    class: "SSS3",
    complexion: "dark",
    session: 2012 / 13,
    description: function () {
        text = this.name + " is" + this.age + " years old who gained admission in + this.session";
        return text;
    }
}
document.getElementById("student").innerHTML = student.description();
