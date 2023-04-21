let x = 10; //global variable;


function local() {
    let x = 15; //local var
}

function gettDate() { //if statement that return time
    if (new Date().getHours() < 18) {
        document.getElementById("date").innerHTML = "good day, how are yu";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        vote = "You are old enough to vote";
    } else {
        vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = vote;
}

function get_Time() { //getting the time of the day! 
    time = new Date().getHours();
    let msg;
    if (time < 12 == time > 0) {
        msg = "it is morning";
    }
    else if (time >= 12 == time < 18) {
        msg = "Good Afternoon";
    }
    else {
        msg = "good evening";
    }
    document.getElementById("time").innerHTML = msg;
}