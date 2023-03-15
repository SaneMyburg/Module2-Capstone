export default class MealList {
   getData = () => {
     fetch('https://themealdb.com/api/json/v1/1/search.php?s')
       .then((response) => response.json())
       .then((data) => {
         const { meals } = data;
         const allFoods = document.querySelector('.all-foods');
         meals.forEach((meal) => {
           const mealDiv = `
            <div class="meal">
              <h3>${meal.strMeal}</h3>
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <div class="button-container">
                <button>Likes</button>
                <button>Comments</button>
              </div>
            </div>
          `;
           allFoods.insertAdjacentHTML('beforeend', mealDiv);
         });
       });
   };
}