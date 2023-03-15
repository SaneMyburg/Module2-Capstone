export default class FoodList {
  constructor() {
    this.foods = {};
  }

  addFood(id, title, image) {
    this.foods[id] = {
      title,
      image,
      comments: [],
    };
  }

  addFoods(allFoods) {
    allFoods.forEach((food) => {
      this.addFood(food.idMeal, food.strMeal, food.strMealThumb);
    });
  }

  setLikes(id, likes) {
    if (Object.keys(this.foods).includes(id)) {
      this.foods[id].likes = likes;
    }
  }

  getLikes(id) {
    return this.foods[id].likes || 0;
  }

  getLikesText(id) {
    const likes = this.getLikes(id);
    if (likes <= 1) {
      return `${likes} like`;
    }
    return `${likes} likes`;
  }

  addComments(id, comments) {
    this.foods[id].comments = comments;
  }

  getComments(id) {
    return this.foods[id].comments;
  }

  getCommentsCount(id) {
    return this.foods[id].comments.length;
  }

  getItemsCount() {
    return Object.keys(this.foods).length;
  }
}

// export default class MealList {
//    getData = () => {
//      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian')
//        .then((response) => response.json())
//        .then((data) => {
//          console.log(data);
//          const { meals } = data;
//          const allFoods = document.querySelector('.all-foods');
//          meals.forEach((meal) => {
//            const mealDiv = `
//             <div class="meal">
//               <h3>${meal.strMeal}</h3>
//               <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//               <div class="button-container">
//                 <button class="likes-btn">Likes <span class="likes-count">0</span></button>
//                 <button>Comments</button>
//               </div>
//             </div>
//           `;
//            allFoods.insertAdjacentHTML('beforeend', mealDiv);

//            const likesBtn = document.querySelector('.likes-btn');
//            const likesCount = document.querySelector('.likes-count');
//            let numLikes = 0;
//            likesBtn.addEventListener('click', () => {
//              numLikes++;
//              likesCount.textContent = numLikes;
//            });
//          });
//        });
//    };
// }
