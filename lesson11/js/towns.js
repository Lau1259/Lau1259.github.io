function townInfo(identifier) {
  if (identifier == "home") {
    identifier = ["Preston", "Soda Springs", "Fish Haven"];
    for (town in identifier) {
      getCards(identifier[town]);
    }
  }
  // console.log(typeof(identifier));
  for (town in identifier) {
    //loop works town is index
    getEvents(identifier[town]);
  }
}

function getEvents(town) {
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  // Identifier passed correctly
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];
      //Town data as JSON Object works
      //Town is correct console.log(town);
      for (let i = 0; i < towns.length; i++) {
        // console.log(town);
        if (towns[i].name == town) {
          let eventlist = towns[i].events;
          eventlist.unshift(town);
          for (let k = 0; k < eventlist.length; k++) {
            let newEvent = document.createElement('li');
            if (k == 0) {
              newEvent.className = "townName";
            }
            // console.log(newEvent);
            newEvent.textContent = eventlist[k];
            document.querySelector(`#local-events`).appendChild(newEvent);
          }
        }
      }
    })
}

function getCards(town) {
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  // console.log(town) //Prints town in check
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++) {
        // console.log(towns[i].name);
        if (towns[i].name == town) {
          let card = document.createElement('a');
          let h2 = document.createElement('h2');
          let foundation = document.createElement('p');
          let population = document.createElement('p');
          let rain = document.createElement('p');

          h2.textContent = towns[i].name;
          foundation.textContent = "Year Founded: " + towns[i].yearFounded;
          population.textContent = "Population: " + towns[i].currentPopulation;
          rain.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;


          card.appendChild(h2);
          card.appendChild(foundation);
          card.appendChild(population);
          card.appendChild(rain);

          let selectorName = town.replace(/ /g, "-").toLowerCase();
          // console.log(`%c Selector ${selectorName}`,"color: rgb(100,250,100); font-size: 20px;");

          document.querySelector(`#${selectorName}`).appendChild(card);
        }
      }
    })
}