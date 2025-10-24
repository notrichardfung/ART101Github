// env03.js - describe an environment with variables, arrays and objects and print them

let envTitle = "Cozy Study Corner";
let elements = ["window light", "plants", "books", "coffee"]; // array

let character = {
    name: "Alex",
    age: 28,                // number
    role: "learner",       // string
    likesCoffee: true,      // boolean
    items: ["laptop", "notebook", "pen"] // array inside object
};

// print to page using jQuery
$(document).ready(function () {
    $("#output").append("<h2>" + envTitle + "</h2>");
    $("#output").append("<p>Elements in this environment: " + elements.join(", ") + "</p>");
    $("#output").append("<p>Character: " + character.name + ", age " + character.age + ", role: " + character.role + "</p>");
    $("#output").append("<p>Favorite item: " + character.items[0] + "</p>");
});
