$(document).ready(function () {

    $("#submitCity").click(function (e) {
        getWeather();
        e.preventDefault();
    });

});

function getWeather() {
    "use strict";
    var city = $("#city");

    if(city.val() !== "") {
        $.ajax({
           url: "http://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&units=metric" + "&APPID=ad92dd9e2eeca64aae0b351ba19819ee",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
               var widget = showResults(data);

                $("#showWeather").html(widget);

                city.val('');
            }
        });
    } else {
        $("#error").html("<span>City field cannot be empty</span>");
    }
}

function showResults(data) {
    return "<h3>Current weather for "+data.name+", "+data.sys.country+"</h3>" +
        "<p>Temperature: "+data.main.temp+" &deg;C</p>" +
        "<p>Pressure: "+data.main.pressure+"</p>" +
        "<p>Humidity: "+data.main.humidity+"</p>" +
        "<p>Min temperature: "+data.main.temp_min+"</p>" +
        "<p>Max temperature: "+data.main.temp_max+"</p>" +
        "<p>Wind speed: "+data.wind.speed+"</p>";
}