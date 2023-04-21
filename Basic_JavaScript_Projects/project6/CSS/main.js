function ride_function() { //
    let Height, can_ride;
    Height = document.getElementById("Height").value;
    can_ride = (Height.length < 52) ? "You are too short" : "You are tall enough"
    document.getElementById("ride").innerHTML = can_ride + " to ride";
}

function Vehicle(Make, Model, Year, Color) { //object function to create many more object
    this.Vehicle_make = Make;
    this.Vehicle_model = Model;
    this.Vehicle_year = Year;
    this.Vehicle_color = Color;
}

let Jack = new Vehicle("toyota", "corolla", 2020, "blue");
let Victor = new Vehicle("Jeep", "Mazda", 2013, "red");
let Joy = new Vehicle("Lexus", "Rx350", 2015, "orange"); //duplicate of the object function created above

function myFunction() {
    document.getElementById("keyword-and-consturctor").innerHTML = "Joy got a new" + Joy.Vehicle_color + "-colored" + Joy.Vehicle_model + " manufactured in" + Joy.Vehicle_make + " in" + Joy.Vehicle_year;
}

function nested() { //this nested function returns 10
    document.getElementById("nested-fnct").innerHTML = count();

    function count() {
        let _count = 9;

        function increment() {
            _count += 1;
        }
        increment()
        return _count;
    }
}

function nested2() { //nested function assignment to help me understand nested function
    document.getElementById("nested-function").innerHTML = count();
    function count() { // this function contains a function which decreases a number

        let _count = 10;;

        function decrease() {
            _count -= 1;
        }
        decrease()
        return _count;
    }

}