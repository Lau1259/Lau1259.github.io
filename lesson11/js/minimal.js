function main() {
  getDate();
  getLastUpdate();
}

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

function getLastUpdate(){
  document.getElementById('lastUpdate').innerHTML = `Last updated ${document.lastModified}`;
}

function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('hidden')
}
