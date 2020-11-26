function townInfo(identifier) {
  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
  if (identifier = "home") {
    identifier = ["Preston", "Soda Springs", "Fish Haven"]
  }
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const towns = jsonObject['towns'];
      //console.table(jsonObject);
      for (let i = 0; i < towns.length; i++) {
        for (let j = 0; j < identifier.length; j++) {
          //console.log(identifier[j]);
          if (towns[i].name == identifier[j]) {
            let card = document.createElement('a');
            let h2 = document.createElement('h2');
            let foundation = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');
            let eventlist = towns[i].events;
            eventlist.unshift(identifier[j]);

            for(let k = 0; k<eventlist.length; k++) {
              let newEvent = document.createElement('li');
              if (k == 0){newEvent.className = "townName";}
              console.log(newEvent);
              newEvent.textContent = eventlist[k];
              document.querySelector(`#local-events`).appendChild(newEvent);}

            h2.textContent = towns[i].name;
            foundation.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rain.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;


            card.appendChild(h2);
            card.appendChild(foundation);
            card.appendChild(population);
            card.appendChild(rain);

            let selectorName = identifier[j].replace(/ /g, "-").toLowerCase();
            console.log(`selector ${selectorName}`);

            document.querySelector(`#${selectorName}`).appendChild(card);

          }
        }
      }
    })
}