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
 	//dynamically creates new button
 	var newBtn=$("<button>");
 	//adds class "gifButton" to new button
 	newBtn.addClass("gifButton");
 	// changes the data-name attribute to the strings in array 
 	//gifButtons
 	newBtn.attr("data-name", gifButtons[i]);
 	//alters the text of the new button to the strings in array
 	//newButton
 	newBtn.text(gifButtons[i]);
 	//appends the new buttons to the div with id "btnBox"
 	$("#btnBox").append(newBtn);
 }
}
//calls function to render buttons
renderButtons();
console.log(gifButtons);


//on-click function for newbutton, which shoulg grab data from 
//giphy api to correspond with the data-name assigned to each 
//button
$("#newBtn").on("click", function() {
	//creates variable which grabs the data-name attribute from
	//the clicked button
      var name = $(this).attr("data-name");
      //sets variable as the url to grab relevant data-name gifs
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        name + "&api_key=dc6zaTOxFJmzC&limit=10";
        //ajax call to giphy API
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response){
        	var result = response.data;
        	console.log(result);


        })

});

$("#add-button").on("click", function(event){
	event.preventDefault();

	var buttonItem = $("#searchItem").val().trim();
	gifButtons.push(buttonItem);
	renderButtons();
	$("#searchItem").empty();
});




    //     {
    //       var results = response.data;
          
    //       for (var i = 0; i < results.length; i++) {
    //         var gifDiv = $("<div class='item'>");

    //         var rating = results[i].rating;

    //         var p = $("<p>").text("Rating: " + rating);

    //         var personImage = $("<img>");
    //         personImage.attr("src", results[i].images.fixed_height.url);

    //         gifDiv.prepend(p);
    //         gifDiv.prepend(personImage);

    //         $("#gifBox").prepend(gifDiv);
    //       }
    //     });
    // });
