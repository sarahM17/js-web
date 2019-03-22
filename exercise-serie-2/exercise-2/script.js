//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...

let request = new XMLHttpRequest()
request.open('GET', 'https://api.punkapi.com/v2/beers', true)
request.onload = function() {
  
  let data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(beer => {

      console.log(beer.name);
      console.log(beer.description);

      const row1 = document.getElementById('row1');

      const card = document.createElement('div');
      card.setAttribute('class', 'card shadow d-flex align-items-center mt-5');

      const img = document.createElement('img');
      img.setAttribute('class', 'card-img-top card-title pt-3 pb-3 rounded');
      img.src = beer.image_url;

      const cardbody = document.createElement('div');
      cardbody.setAttribute('class', 'card-body');

      const h2 = document.createElement('h5');
      h2.textContent = beer.name;

      const h3 = document.createElement('h6');
      h3.textContent = beer.tagline;

      const p = document.createElement('p');
      p.textContent = beer.first_brewed;

        row1.appendChild(card);

        card.appendChild(img);
        card.appendChild(cardbody);

        cardbody.appendChild(h2);
        cardbody.appendChild(h3);
        cardbody.appendChild(p); 
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()