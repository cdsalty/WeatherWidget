// console.log("sanity Check");

$('#weather-form').submit((e)=>{
    e.preventDefault();
    // console.log("user submitted");
    const zip =$('.zip-code').val()
    // console.log(zip)
    //we got the zip from where openweathermap direcitons to request data. we want zip and we are tying it to zip already created.
    //we added &units=imperial to get Farenh...
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`
    // we got the zip and built the URL.
    // NOW WHAT??
    // WE GET JSON
    $.getJSON(weatherUrl,(weatherData)=>{
        console.log(weatherData);

    const currTemp = weatherData.main.temp;
    const temps={
        curr: parseInt(weatherData.main.temp),
        max: weatherData.main.temp_max,
        min: weatherData.main.temp_win
    }
    const newHTML=`<img src="https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png"
    <div>The temperature in ${weatherData.name} is currently ${temps.curr} &deg; </div>`
    // You have to put 'deg' at the end of the previous sentence to get degrees
    $('.weather-data').html(newHTML);

    })
})