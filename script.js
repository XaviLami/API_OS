var apiKey = "be2412c99a491fffa5e50a5236834757"; //Enter your Api key

champ.onchange = () => {
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + champ.value + "&lang=en&units=metric&appid=" + apiKey)
  .then(reponse => reponse.json())
  .then(data => {
    temp.textContent = "Temperature : " + Math.round(data.main.temp) + " °C";
    humidity.textContent = "Humidity : " + data.main.humidity + " %";
    description.textContent = data.weather[0].description;
    console.log(data);
    console.log(data.weather[0].icon);
    document.getElementById("myImg").src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    document.getElementById("error").style.display = "none";
    document.getElementById("none").style.display = "block";
  }).catch(function() {
    console.log("error");
    document.getElementById("error").textContent = "This city does not exist";
    document.getElementById("error").style.display = "block";
    document.getElementById("none").style.display = "none";
});
}
