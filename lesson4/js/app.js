function main(){
    getDate();
    getSummary();
}

function getDate() {
    d = new Date();
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = d.getMonth();
    dayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    dayNum = d.getDay();
    day = d.getDate();
    year = d.getFullYear();
    currentDay = `Today is ${dayName[dayNum-1]}, ${day} ${months[month]} ${year} `
    document.getElementById('date').innerHTML = currentDay;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getSummary(){
    temp = getRndInteger(78,120);
    wind = getRndInteger(6,24);
    precipitation = getRndInteger(30,100);

    if (precipitation  > 70) {
        traffic = "Heavy. Average delay of 40 - 50 minutes.";
    }
    else if (precipitation > 50){
        traffic = "Mild. Average delay of 20 - 30 minutes.";
    }
    else{
        traffic = "Normal. No delays expected.";
    }

    document.getElementById('temperature').innerHTML = `Temperature: ${temp}&#8457;`
    document.getElementById('precipitation').innerHTML = `Precipitation: ${precipitation}%`
    document.getElementById('wind').innerHTML = `Wind speed: ${wind} MPH`
    document.getElementById('traffic').innerHTML = `Traffic: ${traffic}`
}

function toggleMenu() {
    console.log(document.getElementById('primaryNav').classList)
    document.getElementById('primaryNav').classList.toggle('hidden')
}