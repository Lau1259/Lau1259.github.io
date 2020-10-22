function main(){
    doBanner();
    getDate();
    getSummary();
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

/* Summary Functions */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getSummary(){
    let temp = getRndInteger(25,90);
    let wind = getRndInteger(1,12);
    let precipitation = getRndInteger(30,100);
    let windchill = "N/A"
    if (temp <= 50 && wind > 3.0){
        windchill = windChill(temp, wind);
    }

    if (precipitation  > 70) {
        traffic = "Heavy. Average delay of 40 - 50 minutes.";
    }
    else if (precipitation > 50){
        traffic = "Mild. Average delay of 20 - 30 minutes.";
    }
    else{
        traffic = "Normal. No delays expected.";
    }

    document.getElementById('temperature').innerHTML = `Current temperature: ${temp}&#8457;`
    document.getElementById('precipitation').innerHTML = `Precipitation: ${precipitation}%`
    document.getElementById('wind').innerHTML = `Wind speed: ${wind} MPH`
    document.getElementById('windchill').innerHTML = `Wind Chill: ${windchill}`
    document.getElementById('traffic').innerHTML = `Traffic: ${traffic}`
}

/* Functional Elements */
function doBanner(data = false){
    if (new Date().getDay() == "5" || data== true){
        document.getElementById('banner').classList.toggle('hidden');
    }
    document.documentElement.scrollTop = 0;
}

function toggleMenu() {
    console.log(document.getElementById('primaryNav').classList)
    document.getElementById('primaryNav').classList.toggle('hidden')
}