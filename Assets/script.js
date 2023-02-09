// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// Skeleton HTMl
// Search Bar (form/input)
// create divs that our data will be displayed in
// current weather, 5 day weather, list of history
// basic CSS
// bring in dayJS
// space to store or house data

// check out data returned from API 
// requires langitude and longitude
// https://openweathermap.org/forecast5

// requires city name, returns Lat/Lon
// https://openweathermap.org/api/gecoding-api

///HINT: If all of the data coming back from the above is NOT sifficient, you may need to use another API

// event Listener
// search button
// each history button

// write fetch Call to Api
// find the information that we want to display from the API call response
// todays date
// 5 day forecast

// //// render function ///////
// programmatically display that data to the page///
////for loop 5 times
///create x card
///add header, image, temp, wind, humidity
///append x card to some div

// localStorage
// when a city name is input into the form and the search button is clicked, append the city to existing LocalStorage
// when the page loads, grab all of the cities in LocalStorage

var key = "d95aafaed1cba4cf94fb5cdbcdfe4469"


var todayEl = $('#todays-date');
var city = $('#form-input')
var todaysWeather = $('#todays-weather')
var forecast = $('#forecast')

var tempEl = $('#temperature')
var temp1El = $('#temperature1')
var temp2El = $('#temperature2')
var temp3El = $('#temperature3')
var temp4El = $('#temperature4')
var temp5El = $('#temperature5')

var windEl = $('#wind-speed')
var wind1El = $('#wind-speed1')
var wind2El = $('#wind-speed2')
var wind3El = $('#wind-speed3')
var wind4El = $('#wind-speed4')
var wind5El = $('#wind-speed5')

var humidEl = $('#humidity')
var humid1El = $('#humidity1')
var humid2El = $('#humidity2')
var humid3El = $('#humidity3')
var humid4El = $('#humidity4')
var humid5El = $('#humidity5')

var placeEl = $('#city-name')

var day1El = $('#day1')
var day2El = $('#day2')
var day3El = $('#day3')
var day4El = $('#day4')
var day5El = $('#day5')

var imageEl = $('#image')
var image1El = $('#image1')
var image2El = $('#image2')
var image3El = $('#image3')
var image4El = $('#image4')
var image5El = $('#image5')

var searchBtn = $('#site-search')



function displayDate() {
    var now = dayjs().format('(MM/DD/YYYY)');
    todayEl.text(now);
};
displayDate();


var currentWeather = (function (event) {
    event.preventDefault()
    var currentEl = `https://api.openweathermap.org/data/2.5/weather?q=${city.val()}&appid=${key}&units=imperial`
    fetch(currentEl)
        .then(function (response) {
            console.log (response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            var icon = data.weather.icon //not displaying icon yet
            imageEl.text(icon)
            var where = data.name
            placeEl.text(where)
            var temp = data.main.temp
            tempEl.text("Temp: " + temp + " F")
            var humidity = data.main.humidity
            humidEl.text("Humidity: " + humidity + " %")
            var wind = data.wind.speed
            windEl.text("Wind Speed: " + wind + " MPH")
            return data;
        })
});


var fiveDayForecast = function () {
    var fiveApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city.val()}&appid=${key}&units=imperial`
    fetch(fiveApi)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            return data;

        })
};


searchBtn.on('click', currentWeather)
searchBtn.on('click', fiveDayForecast)

// append data recieved to HTML elements for temp, city, dates, humidity, wind speed, temp

// create for loop for the five day forecast and cards


// btn.onclick('click', function(){
    // return (data)
// }) - this is for submit/search button function

// btn.addEventListener('click', function(){
// }) - this will be for history buttons created after search imputs


