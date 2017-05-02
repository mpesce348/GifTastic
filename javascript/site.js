//set global variable array for gif buttons, array is to be
//added to with inputs from user
var gifButtons = ["Tayne", "Ninja Turtles", "Goldfish",
 "Pizza", "Groovy", "Kangaroos", "Ballin", "Captain America"];

//create function to render the buttons to the html
function renderButtons(){
//empty button box
$("#btnBox").empty();
//begin for loop to go through gifButton array and append the 
//strings inside to buttons in the div with id button box
 for (var i=0; i<gifButtons.length; i++) {
 	//defines variable which dynamically creates new button
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
 $(".gifButton").on("click", function() {
    $("#gifBox").empty();
    //creates variable which grabs the data-name attribute from
    //the clicked button
      var name = $(this).attr("data-name");
      //sets variable as the url to grab relevant data-name gifs
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        name + "&api_key=dc6zaTOxFJmzC&limit=11";
        //ajax call to giphy API
      $.ajax({
          url: queryURL,
          method: "GET"
        })
      //stops ajax call and retreives response
        .done(function(response){
            //set a variable as the data in the response
            var result = response.data;
            console.log(result);
            //creates a for loop to go through the list of
            //objects retrieved by the ajax call
            for (var i=0; i<result.length; i++){
            //creates a variable gifImage which dynamically 
            //creates an image
            var gifImage=$("<img>");
            //changes the src attribute to the specific image desired
            //from the images object 
            gifImage.attr("src", result[i].images.fixed_height.url);
            //prepends the images to the div with id gifBox
            $("#gifBox").prepend(gifImage);


        }
        })
    

});
}
//calls function to render buttons
renderButtons();
console.log(gifButtons);


//on-click function for buttons with class gifButton which shoulg grab data from 
//giphy api to correspond with the data-name assigned to each 
//button

//begins on lick function for searhcing for new gifs
$("#add-button").on("click", function(event){
	//allows for using enter key or buttons click
	event.preventDefault();
	//creates variable which pulls and trims the value of the
	//input in the search form with id searchItem
	var buttonItem = $("#searchItem").val().trim();
	//pushes new nutton itm into the gifButton array
	gifButtons.push(buttonItem);
	//adds class gif
	$(buttonItem).addClass("gifButton");
	//peforms renderButton function
	renderButtons();

	
});



