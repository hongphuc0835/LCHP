$.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=96381a872b1b405c5bf83b2ed63d9561&mode=json&units=metric",
function (api) {
    $('.temp').html('Local Temp: ' + api.main.temp + 'C');
    $('.city').html('city : ' + api.name);
    $('.description').html('Description:' + api.weather[0].description);

    $('.icon img').attr('src', 'http://openweathermap.org/img/wn/' + api.weather[0].icon + '.png');
});