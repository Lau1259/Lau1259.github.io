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
function toggleMenu() {
    console.log(document.getElementById('primaryNav').classList)
    document.getElementById('primaryNav').classList.toggle('hidden')
}