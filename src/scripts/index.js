import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import "./component/restaurant-navbar.js";
import "./component/restaurant-footer.js";

document.addEventListener("DOMContentLoaded", async () => {
  const jsonData = await import('../DATA.json');
  const datas = jsonData.default.restaurants;
  let dataCard = '';
  datas.forEach(function(data) {
      dataCard +=`
      <div class="card">
          <img class="card_thumb" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
          <div class="city">${data.city}</div>
          <div class="card_content">
              <p class="card_rating">
                  Rating : 
                  <a href="#" class="card_rating_number">${data.rating}</a>
              </p>
              <h1 class="card_title"><a href="#">${data.name}</a></h1>
              <div class="card_desc">${data.description.slice(0, 150)}...</div>
          </div>
      </div>
      `;
  });
  document.querySelector('#testing').innerHTML = dataCard;
});

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.dropdown')
    const right = document.querySelector('.right')
    const onright = document.querySelector('.on-right')
    
    dropdown.addEventListener('click', function() {
      this.classList.toggle('change')
      right.classList.toggle('change')
      onright.classList.toggle('change')
    })
    
    onright.addEventListener('click', function() {
      this.classList.remove('change')
      right.classList.remove('change')
      dropdown.classList.remove('change')
    })
});
