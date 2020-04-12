
$(document).ready(function () {
  $('#citySearched').on("click", function () {
    var city = $('searchedCity').val();
    $('searchedCity').val("");
    cityWeather(city);
    console.log(cityWeather)
  });
  //function append row based on what city was searched by user
  $("#submit").on("click", function () {
    var listedCity = $('<li>').text('<button>' + city + ' <button>');
    $('.cities').append(listedCity)
  }
  )

}); the given city name
///cityWeather(city)
//function to search the weather with
/// });

//function
function cityWeather(city) {
  $.ajax({
    type: 'GET',
    url: 'api.openweathermap.org/data/2.5/forcast?q=' + city + '&appid=e9f6c30ce57e786dee60edd348daef66',
    dataType: 'json',
    success: function (data) {

      $('dailyWeather').html('<h1>Five day Forcast</h1>').append("<div class=\"row\">")
      //loop over th forcast w/ 3 hour incriments    
      for (var i = 0; i < data.list.length; i++) {
        //determine what time we look at the weather
        //add cards 
        if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {
          var col = $("div").addClass('col-md-2');
          var card = $("div").addClass("card");
          var cardBody = $('div').addClass('card-body');


          console.log(data);
          //   var header = $('<h5>').addClass("card-title").text(data.name + "(" new Date().toLocaleDateString() +")" );
          //add image 
          var forcastPic = $('<img>').attr("src", "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");
          //p tags class of card text add tempertur and humidity
          var temp = $('<p>').addClass("card-text").text('Temperature:' + data.list.main.temp + 'F');
          var humid = $('<p>').addClass("card-text").text('Humidity:' + data.list.main.humidity + '%');
          var windspd = $('<p>').addClass("card-text").text('Humidity:' + data.list.main.humidity + '%');
          var uvindex = $('<p>').addClass("card-text").text('Humidity:' + data.list.main.humidity + '%');

          // if, else function to change value background based on value


          ///variable for the temperature
          /// append
          col.append(card.append(cardBody.append(header, forcastPic, temp, humid)));
          $('#dailyWeather .row').append(col);
        }
      }

    }
  });
}



//var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

// Initial array of weather

var cities = ["Chicago", " Atlanta", "Austin", "New York", "Orlando", "San Franciso", "Seattle", "Denver"];

//Append submit/on click to top of id= "popcities"
// submit input into an array 
prepend() 
