//set global variable array for gif buttons, array is to be
//added to with inputs from user
var gifButtons = ["tayne", "Morty", "Do a Flip!", "Groovy"];

//create function to render the buttons to the html
function renderButtons(){
//empty button box
$("#btnBox").empty();
 for (var i=0; i<gifButtons.length; i++) {
 	$(gifButtons).append("#btnBox");
 }
}