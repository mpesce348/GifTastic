//set global variable array for gif buttons, array is to be
//added to with inputs from user
var gifButtons = ["Tayne", "Ninja Turtles", "Venture Bros",
 "Pizza", "Groovy", "Kangaroos", "Ballin"];

//create function to render the buttons to the html
function renderButtons(){
//empty button box
$("#btnBox").empty();
//begin for loop to go through gifButton array and append the 
//strings inside to buttons in the gif box
 for (var i=0; i<gifButtons.length; i++) {
 	var newBtn=$("<button>");
 	newBtn.addClass("gifButton");
 	newBtn.attr("data-name", gifButtons[i]);
 	newBtn.text(gifButtons[i]);

 	$("#btnBox").append(newBtn);
 }
}
renderButtons();
console.log(gifButtons);



// $("#searchBtn").on("click", function() {
//       var person = $(this).attr("data-person");
//       var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
//         person + "&api_key=dc6zaTOxFJmzC&limit=10";

//       $.ajax({
//           url: queryURL,
//           method: "GET"
//         })
//         .done(function(response) {
//           var results = response.data;
