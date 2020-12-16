d = new Date
document.getElementById('rStart').min = `${d.getMonth()+1}-${d.getDate()}-${d.getFullYear()}`;

document.getElementById('rEnd').min = `${d.getMonth()+1}-${d.getDate()+1}-${d.getFullYear()}`;

fetch("data/rental_data.json")
  .then(response => response.json())
  .then(rentals => {
    for (let i = 0; i < rentals.prices.length; i++) {
      option = document.createElement("option");
      option.setAttribute("value", rentals.prices[i].rental_type);
      option.textContent = rentals.prices[i].rental_type;

      document.getElementById('vehicleType').appendChild(option);
    }
  });