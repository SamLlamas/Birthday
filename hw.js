$(document).ready(function() {

  var animals = ["Hey Boyo, click me!"];

  // function to make buttons and add to page
  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++) {
      var a = $("<button>");
      a.addClass(classToAdd);
      a.text(arrayToUse[i]);
      $(areaToAddTo).append(a);
    }

  }

  $(document).on("click", ".animal-button", function() {
    $(this).hide();
    $("#animals").empty();
    $(".animal-button").removeClass("active");
    $(this).addClass("active");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=Happy_Birthday&api_key=dc6zaTOxFJmzC&limit=13";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log("test")
        for (var i = 0; i < results.length; i++) {
          var animalDiv = $("<div class=\"animal-item\">");

          var animated = results[i].images.fixed_height.url;
          var animalImage = $("<img>");
          animalImage.attr("src", animated);
          animalImage.addClass("animal-image");
          animalDiv.append(animalImage);

          $("#animals").append(animalDiv);
        }
      });
      $("#message").show();
  });
  


  populateButtons(animals, "animal-button", "#animal-buttons");
});
