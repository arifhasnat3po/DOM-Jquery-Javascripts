var firstName = prompt("First Name:");
var lastName = prompt("Last Name:");
var age = prompt("Age: ");
var height = prompt("Height: ");
var petname = prompt("Pet Name: ");

var ageCond = null;

if (age >= 20 && age <= 30) {
    ageCond = true;
} else {
    ageCond = false;
}

if (firstName[0] == lastName[0] && ageCond && height >= 176 && petname[petname.length - 1] === "y") {
    console.log("Welcome Comrade! You've passed the Spy Test");
} else {
    console.log("Sorry, nothing to see here.");
}
