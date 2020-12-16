const params = new URLSearchParams(window.location.search);

//This generates a confirmation code. (Only for proof of concept)
const generateRandomString = (length=8)=>Math.random().toString(20).substr(2, length);

document.getElementById('firstName').innerHTML+= params.get("fName");
document.getElementById('lastName').innerHTML+= params.get("lName");
document.getElementById('country').innerHTML+= params.get("country");
document.getElementById('email').innerHTML+= params.get("email");
document.getElementById('phone').innerHTML+= params.get("phone");
document.getElementById('cruise').innerHTML+= params.get("cruise");
document.getElementById('rentalStart').innerHTML+= params.get("rStart");
document.getElementById('rentalEnd').innerHTML+= params.get("rEnd");
document.getElementById('passengers').innerHTML+= `${params.get("totalPassengers")}`;
document.getElementById('rentalType').innerHTML+= `${params.get("rental")}`;
document.getElementById('vehicle').innerHTML+= params.get("vehicleType");
document.getElementById('vehicleAmount').innerHTML+= params.get("vehicleAmount");
document.getElementById('drop').innerHTML+= params.get("dropoff");
document.getElementById('dropLoc').innerHTML+= params.get("dropLoc");
document.getElementById('extra').innerHTML+= params.get("rentalComments");
document.getElementById('confirmation').innerHTML += generateRandomString()


