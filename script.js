btn.onclick = () => {
  fetch("http://api.openweathermap.org/data/2.5/weather?q=" + champ.value + "&lang=fr&units=metric&appid=be2412c99a491fffa5e50a5236834757")
  .then(reponse => reponse.json())
  .then(data => {
    temp.textContent = "Température : " + Math.round(data.main.temp) + " °C";
    humidity.textContent = "Humidité : " + data.main.humidity + " %";
    description.textContent = "Description : " + data.weather[0].description;
    console.log(data);
    console.log(data.weather[0].icon);
    document.getElementById("myImg").src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
  })
}
