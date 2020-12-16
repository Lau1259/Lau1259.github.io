function hide(id) {
  document.getElementById(id).classList = "hidden";
}

function toggleMenu() {
  // document.getElementById('primary-nav').classList.toggle('hidden');
  document.getElementById('primary-nav').classList.toggle('showNav');
  console.log(document.getElementById('primary-nav').classList);
}

function getInfo(maxPersons) {
  console.log(`This will populate rentals that have room up to ${maxPersons} persons.`)
}

WebFont.load({
  google: {
    families: [
      'Skranji',
      'Laila'
    ]
  }
});

var weatherData;

//Current Weather info
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=minutely,hourly&appid=703bf38fa0ac6aec6fd04dd0b7e37720&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log("Current Weather:")
    page = window.location.pathname.substring(location.pathname.lastIndexOf("/")+1);
    // console.log(page);
    if (page == "index.html"){
      weatherData = jsObject;
      getForecast();
    }
    document.getElementById("currentTemp").innerHTML = `Temp: ${jsObject.current['temp']}&#8457;`
    document.getElementById("currentDesc").innerHTML = capitalize(jsObject.current.weather[0]['description'])
    document.getElementById("currentHum").innerHTML = `Humidity: ${jsObject.current['humidity']}%`
  });

function capitalize(text) {
  text = text.charAt(0).toUpperCase() + text.slice(1);
  return text;
}

function getForecast() {
  let forecastAmount = 3
  let start = 1

  while (start <= forecastAmount) {
    let day = new Date().getDay();
    let days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let today = days[day+start];
    if (day+start >= 7 ) {
      today = days[day+start-7]
    }
    let temp = `${weatherData["daily"][start]["temp"]["day"]}\u2109`;
    let imageUrl = weatherData["daily"][start]["weather"][0]["icon"];
    let imageDesc = weatherData["daily"][start]["weather"][0]["description"];
    let imageSrc = `https://openweathermap.org/img/w/${imageUrl}.png`;

    //Define Variable
    let container = document.createElement("div");
    container.classList = "card forecast";
    let icon = document.createElement("img");
    let weatherInfo = document.createElement("ul");
    let forecastDay = document.createElement("li")
    let dayTemp = document.createElement("li");
    let dayDesc = document.createElement("li");

    //Assign Attributes and data values
    icon.setAttribute('src',imageSrc);
    icon.setAttribute('alt',imageDesc);
    forecastDay.textContent = today;
    dayTemp.textContent = temp;
    dayDesc.textContent = capitalize(imageDesc);

    //Add to container
    container.appendChild(icon);
    container.appendChild(weatherInfo);
    weatherInfo.appendChild(forecastDay);
    weatherInfo.appendChild(dayDesc);
    weatherInfo.appendChild(dayTemp);

    //Add container to DOM
    document.getElementById("threeDay").append(container)
    start++;
  }
}

// Interception-Observer
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
   imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

//Last Update Date
  document.getElementById('lastUpdate').innerHTML = `Last updated ${document.lastModified}`;