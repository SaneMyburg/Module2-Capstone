import { addLikes, showLikes } from './likes.js';

async function getData() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian');
  const data = await res.json();
  const allFoods = document.querySelector('.all-foods');
  let output = '';
  data.meals.forEach((meal) => {
    output += `
      <div class="meal">
        <div class="div-img">
          <img src="${meal.strMealThumb}">
        </div>
        <div class="div-like">
          <p>${meal.strMeal}</p>
          <div class="div-heart" id="div-heart">
            <i class="uil uil-heart" id="${meal.idMeal}"></i>
            <label id="id${meal.idMeal}"></label>
          </div>
        </div>
        <button id="${meal.idMeal}">Comment</button>
      </div>
    `;
  });
  allFoods.innerHTML = output;

  const likes = document.querySelectorAll('.uil.uil-heart');

  likes.forEach((like) => {
    like.addEventListener('click', (e) => {
      const { id } = e.target;
      addLikes(id);
      showLikes(id);
    });
    showLikes(like.id);
  });
}

export default getData;
