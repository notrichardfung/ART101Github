var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

function makeImage(imageName) {
    if (colors[colorCount] == imageName) {
        $("body").append("<img width=50 src='images/" + imageName + ".png'>");
    }
}

function changeBackground(NewColor) {
   $("body").css("background-color", NewColor);


}

$(".color-button").click(function () {
    changeBackground(this.id);
});

function moody(moodCount) {
    let mood = "";
    if (count < 5) { mood = "gresh and happy"; }
   else if ((count >= 5) && (count < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }

   return mood;
}

let moodMessage = moody(count);


    changeBackground(colors[colorCount]);
    makeImage("Coral");
    makeImage("Orchid");
    makeImage("Plum");
    makeImage("HotPink");

   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; };
