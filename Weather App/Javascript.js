let weather = {
  apiKey: "641f664212b3b3f7349ccd9e41a80f06",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
       + city
        + "&units=metric&appid="
         + this.apiKey
      )
      .then ((response) => response.json())
       .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidty: " + humidty + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    }
};
