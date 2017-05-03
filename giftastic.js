//Create array for animals

var animals = ["Lion", "Tiger"];
var animalName = " ";
//create function to display GIF

function animalGif() {
//clear gifs-appear-here area

//save input value 

//create queryurl for ajax call with apiKey

//Call ajax function

//for each resonse value

//create div class item

// get rating

// set varialbe p and display Rating on page

//if rating is not r and pg-13 display GIFs


//create img element

//add class animal-image

//get src url

//set still url attr

//set animate url attr 

//set data-state attr 

//prepend rating p to gifDiv

//prepend animalImage to gifDiv


};
//Create function to render

function displayButton() {

    // Delete the content inside the animal-view div
     $("#animal-view").empty();
    
      //Loop the array animals list and generate button
     for (var i = 0; i < animals.length; i++) {
      console.log("animals: "+ animals[i]);

          //create button

          var addButton = $("<button>");
          //add class to button
          addButton.addClass('item');
         
         //add text value to button
          addButton.text(animals[i]);
         
          //append button
          $("#animal-view").append(addButton);

          //add attr to button data-name
          animalName = addButton.text();
          addButton.attr("data-name", animalName);
          console.log("button name: "+ animalName);
      }
}
      // on click function to get input value
      $("#add-animal").on("click", function(event) {
      

      event.preventDefault();
      //set varialbe for input value
      var addAnimal = $("#animal-input").val();
      console.log("my animal: "+ addAnimal);

      //add input value to array
      animals.push(addAnimal);
      console.log("array: "+ animals);

      //call displayButton function to render button
      displayButton();
       
      });
//on click function for pause and play

 
   



//clean up animal view and called displayButton call
      $("#animal-view").empty();
      displayButton();
