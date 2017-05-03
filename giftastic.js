//Create array for animals

var animals = ["lion", "tiger"];
var animalName = "";
//create function to display GIF

function animalGif() {
    //clear gifs-appear-here area
    $('.gifs-appear-here').empty();

    //save input value in variable
    var animal = $(this).attr("data-name");
    console.log(animal);
    //create queryurl for ajax call with apiKey
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10 ";
    //Call ajax function
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        //set animal-view att animal
        console.log(response);
        $("#animal-view").attr(animal);

        //set results with resopnse data
        var results = response.data;
        console.log("resoponse" + results);

        //for each resonse value
        for (var i = 0; i < results.length; i++) {
            //create div class item
            var gifDiv = $("<div class='item'>");

            // get rating, if rating is not r and pg-13 display GIFs

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                var rating = results[i].rating;
                // set varialbe p and display Rating on page
                var p = $("<p>").text("Rating: " + rating);
                console.log(p);
            }

            //create img element var animalImage
            var animalImage = $("<img>");
            //add class animal-image
            animalImage.addClass('animal-image');
            //get src url
            //set still url attr
            //set animate url attr 
            //set data-state attr 
            animalImage.attr("src", results[i].images.fixed_width_still.url);
            animalImage.attr("data-still", results[i].images.fixed_width_still.url);
            animalImage.attr("data-animate", results[i].images.fixed_width.url);
            animalImage.attr("data-state", "still");

            //prepend rating p to gifDiv

            //prepend animalImage to gifDiv
            gifDiv.prepend(p);
            gifDiv.prepend(animalImage);

            $("#gifs-appear-here").prepend(gifDiv);
        }
    });

};



//Create function to render

function displayButton() {

    // Delete the content inside the animal-view div
    $("#animal-view").empty();

    //Loop the array animals list and generate button
    for (var i = 0; i < animals.length; i++) {
        console.log("animals: " + animals[i]);

        //create button

        var addButton = $("<button>");
        //add class to button
        addButton.addClass('btn btn-info');
        addButton.attr('id', "button-id");
        //add text value to button
        addButton.text(animals[i]);

        //append button
        $("#animal-view").append(addButton);

        //add attr to button data-name
        animalName = addButton.text();
        addButton.attr("data-name", animalName);
        console.log("button name: " + animalName);
    }
}
// on click function to get input value
$("#add-animal").on("click", function(event) {


    event.preventDefault();
    //set varialbe for input value
    var addAnimal = $("#animal-input").val();
    console.log("my animal: " + addAnimal);

    //add input value to array
    animals.push(addAnimal);
    console.log("array: " + animals);

    //call displayButton function to render button
    displayButton();

});
//on click function for pause and play
 $(document).on("click", "#button-id", animalGif);



   $(document).on('click',".animal-image", function(event)
  // $(".animal-image").click(function()
     {
       var state= $(this).attr("data-state");
               switch (state) {
         case "animate":
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");  
         break;
         case "still":   
             $(this).attr("src", $(this).attr("data-animate"));
             $(this).attr("data-state", "animate");
             break;
             default:
             console.log("we set state = " + $(this).attr("data-state"));
        }
     });
//clean up animal view and called displayButton call
 
$("#animal-view").empty();
displayButton();
