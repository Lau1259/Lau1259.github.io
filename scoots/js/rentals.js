fetch("data/rental_data.json")
  .then(response => response.json())
  .then(rentals => {
    for (let i = 0; i < rentals.prices.length; i++) {
      // console.log(rentals.prices[i]);
      let title = rentals.prices[i]["rental_type"];
      let max = rentals.prices[i]["max_persons"];
      let reservationHalf = rentals.prices[i]["reservation"]["half"];
      let reservationFull = rentals.prices[i]["reservation"]["full"];
      let walkInHalf = rentals.prices[i]["walk_in"]["half"];
      let walkInFull = rentals.prices[i]["walk_in"]["full"];
      let imageToLoad = rentals.prices[i]["imgSrc"];

      let rentalOption = document.createElement("div");
      let h2 = document.createElement("h2");
      let row = document.createElement("div")
      let img = document.createElement("img");
      let column = document.createElement("div");
      let ul = document.createElement("ul");
      let rmax = document.createElement("li");
      let rtitle = document.createElement("li");
      let rPrices = document.createElement("li");
      let wtitle = document.createElement("li");
      let wPrices = document.createElement("li");
      let btn = document.createElement("div");
      let reserve = document.createElement("a");

      rentalOption.classList = "rental-option card"
      h2.textContent = title;
      img.setAttribute("src", "images/jpg/loading.jpg");
      img.setAttribute("alt", title);
      img.setAttribute("data-src", imageToLoad);
      row.classList = "flex-row";
      column.classList = "flex-column rental-option-text";
      rmax.textContent = `Max Passengers: ${max}`;
      rtitle.textContent = "Reservation Prices:";
      rPrices.textContent = `Half day: $${reservationHalf} | Full day: $${reservationFull}`
      wtitle.textContent = "Walk In Prices:";
      wPrices.textContent = `Half day: $${walkInHalf} | Full day: $${walkInFull}`
      btn.classList = "button";
      reserve.setAttribute("href", "reservations.html")
      reserve.textContent = "Reserve Now!"


      rentalOption.appendChild(h2);
      rentalOption.appendChild(row);
      row.appendChild(img);
      row.appendChild(column);
      column.appendChild(ul);
      ul.appendChild(rmax);
      ul.appendChild(rtitle);
      ul.appendChild(rPrices);
      ul.appendChild(wtitle);
      ul.appendChild(wPrices);
      column.appendChild(btn);
      btn.appendChild(reserve);

      document.getElementById("rental-container").appendChild(rentalOption);
    }
  });

// Interception-Observer
function rentalImages() {
  let picsToLoad = document.querySelectorAll('img[data-src]');
  const loadPic = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
    };
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadPic(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    picsToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    picsToLoad.forEach((img) => {
      loadPic(img);
    });
  }
}