function main() {
  getDate();
}

function townData(identifier) {
  getSummary(identifier);
  getImages(identifier);
}

/* Footer Date */
function getDate() {
  let d = new Date();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let month = d.getMonth();
  let dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let dayNum = d.getDay();
  let day = d.getDate();
  let year = d.getFullYear();
  let currentDay = `Today is ${dayName[dayNum-1]}, ${day} ${months[month]} ${year} `
  document.getElementById('date').innerHTML = currentDay;
}

/* Functional Elements */
function doBanner(data = false) {
  if (new Date().getDay() == "5" || data == true) {
    document.getElementById('banner').classList.toggle('hidden');
  }
  document.documentElement.scrollTop = 0;
}

function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('hidden')
}

/* GET weather data */
function getSummary(identifier) {
  //Using weather gives you current weather data
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?${identifier}&appid=703bf38fa0ac6aec6fd04dd0b7e37720&units=imperial`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      // console.log("Current Weather:")
      let temp = jsObject.main['temp'];
      let speed = jsObject.wind['speed'];
      document.getElementById('temperature').textContent =
        `Current Temperature: ${temp} \u2109`;
      document.getElementById('tempHigh').textContent =
        `High: ${jsObject.main['temp_max']} \u2109`;
      document.getElementById('tempLow').textContent =
        `Low: ${jsObject.main['temp_min']} \u2109`;
      document.getElementById('humidity').textContent =
        `Humidity: ${jsObject.main['humidity']}%`;
      document.getElementById('wind').textContent =
        `Wind Speed: ${speed} MPH`;
      document.getElementById('windchill').textContent =
        `Wind Chill: ${windChill(temp, speed)} \u2109`;
      //console.log(JSON.stringify(jsObject));
    });
}


function windChill(tempF, speed) {
  let s = Math.pow(speed, 0.16);
  f = 35.74 + (0.6215 * tempF) - (35.75 * s) + (0.4275 * tempF * s);
  return f.toFixed(2)
}

function getImages(identifier) {
  const apiURL = `https://api.openweathermap.org/data/2.5/forecast?${identifier}&appid=703bf38fa0ac6aec6fd04dd0b7e37720&units=imperial`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      // console.log("Forecast:")
      // console.log(JSON.stringify(jsObject))
      let day = 1
      for (let i = 0; i < jsObject.list.length; i++) {
        if (jsObject.list[i].dt_txt.includes("18:00:00")) {
          // console.log(jsObject.list[i].dt_txt)
          let imageUrl = jsObject.list[i].weather[0].icon;
          //console.log(imageUrl);
          let dTemp = jsObject.list[i].main.temp;
          let desc = jsObject.list[i].weather[0].description;
          // console.log(`Description: ${desc}`);
          // console.log(`Temperature: ${dTemp}`);
          let imagesrc = `https://openweathermap.org/img/w/${imageUrl}.png`;
          // console.log(`This is the image src: ${imagesrc}`);
          // console.log(i, `day: ${day}`);
          document.getElementById(`day${day}`).setAttribute('src', imagesrc);
          document.getElementById(`day${day}`).setAttribute('alt', dTemp);
          document.getElementById(`day${day}-desc`).textContent = `${titleCase(desc)}`;
          document.getElementById(`day${day}-temp`).textContent = `${dTemp} \u2109`;
          day++;
        }
      }
    });
}

function titleCase(str) {
  str = str.toLowerCase().split(" ")
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  str = str.join(" ")
  return str
}

// Hero Images Intersection Observer
let heroImages = document.querySelectorAll('source[data-srcset]');
const loadHero = (image) => {
  image.setAttribute('srcset', image.getAttribute('data-srcset'));
  image.onload = () => {
    image.removeAttribute('data-srcset');
  };
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadHero(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  heroImages.forEach((img) => {
    observer.observe(img);
  });
} else {
  heroImages.forEach((img) => {
    loadHero(img);
  });
}

// Range Adjustment
function adjustRating(rating) {
  document.getElementById("s-val").innerHTML = rating;
}