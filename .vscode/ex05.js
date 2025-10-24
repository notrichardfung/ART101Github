let count = 0
let colors = ["red", "green", "blue"]

$("#needy-button").click(function () { 
    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] );
   $("body").css("background-color", colors[reminder]);
   count = count + 1;
   if (count==4) { count=0; } // new line
});
