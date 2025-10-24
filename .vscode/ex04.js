let count = 0;
let colors = ["Orchid", "HotPink", "Plum"];

$("#needy-button").click(function () { 

    $("#needy-button").html( "Clicks: " + count +
     " Color: " + colors[count] );

    $("body").css("background-color", colors[count]);


    count = count + 1;
   if (count==3) { count=0; } // new line
});
