export default class MealList {
   getData = () => {
    fetch('https://themealdb.com/api/json/v1/1/search.php?s')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const { meals } = data;
        const allFoods = document.querySelector('.all-foods');
        meals.forEach((meal) => {
          const mealDiv = `
            <div class="meal">
              <h3>${meal.strMeal}</h3>
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <div class="button-container">
                <button class="likes-btn">Likes <span class="likes-count">0</span></button>
                <button>Comments</button>
              </div>
            </div>
          `;
          allFoods.insertAdjacentHTML('beforeend', mealDiv);

          const likesBtn = document.querySelector('.likes-btn');
          const likesCount = document.querySelector('.likes-count');
          let numLikes = 0;
          likesBtn.addEventListener('click', () => {
            numLikes++;
            likesCount.textContent = numLikes;
          });
        });
      })
  };  
}