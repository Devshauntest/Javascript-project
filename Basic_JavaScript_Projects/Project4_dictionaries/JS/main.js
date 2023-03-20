function myObj() {
    let Dog = {
        color: "blue",
        breed: "Eskimo",
        sound: "Bark",
        age: 6
    };
    delete Dog.age; //this delete the age of the dog from the object
    document.getElementById("dictionary").innerHTML = Dog.sound;
}