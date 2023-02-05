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