const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//   });


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    //console.table(jsonObject);
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthDate= document.createElement('p');
      let birthPlace= document.createElement('p');
      let portrait = document.createElement('img');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;
      birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;
      portrait.setAttribute('src', prophets[i].imageurl);
      portrait.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`);

      card.appendChild(h2);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(portrait);


      document.querySelector('div.cards').appendChild(card);
    }
  });