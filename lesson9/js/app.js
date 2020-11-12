function main(){
    getDate();
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

function toggleMenu() {
    console.log(document.getElementById('primaryNav').classList)
    document.getElementById('primaryNav').classList.toggle('hidden')
}