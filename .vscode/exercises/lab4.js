// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "personal bike", "rental bike", "some random car", "friends"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Personal bike",
    route: 7,
    nickname: "Sun Chaser",
    isScenic: true,
    riders: ["Me", "Friend A", "Friend B"],
};

// build the megaSentence string by concatenating array and object values
let megaSentence;
megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best rider: " + myFavouriteCommute.riders[0] + "</p>";

// print to the page
$(document).ready(function () {
    $("#output").html(megaSentence);
});
