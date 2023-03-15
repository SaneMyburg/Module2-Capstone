import { getMealData, postData } from './Api-call.js';
import FoodList from './display.js';

const foodList = new FoodList();
// Assigning Involvement API link
const InvoApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/'
  + 'capstoneApi/apps/';
const InvoApiIDLikes = 'zX9lc5HNiZeTfJrwouGw';
const InvoApiIDComments= 'URZ255Gy8SqK9jNzsDxm';
const likesUrl = '/likes';
const commentsUrl = '/comments';
// Assigning Meals DB API link
const MealApiUrl = 'https://www.themealdb.com/api/json/v1/1/';
const MealCatagory = 'filter.php?a=Italian';
const mealFullUrl = MealApiUrl + MealCatagory;
// Selecting IDs from the HTML...
const foodListWrapper = document.getElementById('all-foods');
const commentPopup = document.getElementById('comment-popup');
const itemCounter = document.getElementById('count-foods');

export const getComments = (id) => new Promise((resolve) => {
  const itemId = `?item_id=${id}`;
  const apiComments = InvoApiUrl + InvoApiIDComments + commentsUrl + itemId;
  getMealData(apiComments).then((commentsFromAPI) => {
    if (commentsFromAPI.error) commentsFromAPI = [];
    const commValid = commentsFromAPI.filter((theComment) => {
      const username = theComment.username.trim();
      const comment = theComment.comment.trim();
      return username.length && comment.length;
    });
    foodList.addComments(id, commValid.reverse());
    resolve();
  });
});

export const displayPopUp = (id) => {
  commentPopup.classList.add('show');
  commentPopup.innerHTML = `      <div id="popup-btn-close">&times;</div>
    <div class="comment-popup-wrapper">
      <div class="info-section">
        <img id="food-image" src="${foodList.foods[id].image}" alt="" />
        <h2 id="name-food">${foodList.foods[id].title}</h2>
        <p id="recipes">...</p>
      </div>
      <div class="comments-section">
        <h3>Add Comment:</h3>
        <form id="comment-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <textarea
            name="comment"
            rows="5"
            placeholder="Your Comment"
            required
          ></textarea>
          <button id="button" type="submit">Submit</button>
        </form>

        <h3 id="comments-header">Comments:</h3>
        <ul id="comments">
        </ul>
      </div>
    </div>`;

  const commentForm = document.getElementById('comment-form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // postComment(id, e.target.name, e.target.comment);
  });

  const closeButton = document.getElementById('popup-btn-close');
  closeButton.addEventListener('click', () => {
    commentPopup.classList.remove('show');
  });
  const URL = `${MealApiUrl}lookup.php?i=${id}`;
  getMealData(URL).then((result) => {
    const foodItem = result.meals[0];
    const foodDescElement = document.getElementById('recipes');
    foodDescElement.innerHTML = foodItem.strInstructions;
  });
  //   getComments(id).then(() => {
  //     const { comments } = foodList.foods[id];
  //     const commentsHeader = document.getElementById("comments-header");
  //     const commentWrapper = document.getElementById("comments");
  //     if (comments.length) {
  //       // add counter to comments header
  //       commentsHeader.innerHTML += `<span class="food-count-icon">${foodList.getCommentsCount(
  //         id
  //       )}</span>`;

//       //       comments will be added here.........
//     } else {
//       commentWrapper.innerHTML = "no comments";
//     }
//   });
};

export const likeFood = (id) => {
  const url = InvoApiUrl + InvoApiIDLikes + likesUrl;
  const data = {
    item_id: id,
  };
  postData(url, data).then((result) => {
    if (result.status === 201) {
      const newLikes = foodList.getLikes(id) + 1;
      foodList.setLikes(id, newLikes);
      const likeWrapper = document.getElementById(id);
      const counterElement = likeWrapper.querySelector('.count-likes');
      counterElement.innerHTML = foodList.getLikesText(id);
    }
  });
};

export const showAllFood = () => {
  foodListWrapper.innerHTML = '';
  Object.keys(foodList.foods).forEach((foodId) => {
    const food = foodList.foods[foodId];
    foodListWrapper.innerHTML += `
    <div class="container-food" id="${foodId}">
      <img src="${food.image}" alt="image of a meal" />
      <div class="name-like">
        <h3 class="name-food">${food.title}</h3>
        <div class="give-likes">
          <i class="fa fa-heart" aria-hidden="true"></i>
          <div class="count-likes">
            ${foodList.getLikesText(foodId)}
          </div>
        </div>
      </div>
      <button class="btn btn-comment">Click for More</button>
    </div>
    `;
  });

  const commentsButtons = foodListWrapper.querySelectorAll('.btn-comment');
  commentsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      displayPopUp(button.parentElement.id);
    });
  });

  const likeButtons = foodListWrapper.querySelectorAll('.give-likes');
  likeButtons.forEach((likeButton) => {
    const foodId = likeButton.parentElement.parentElement.id;
    likeButton.addEventListener('click', () => {
      likeFood(foodId);
    });
  });
};

export const getAllFoodData = () => new Promise((resolve) => {
  getMealData(mealFullUrl).then((result) => {
    foodList.addFoods(result.meals);
    resolve();
  });
});

export const getAllLikes = () => new Promise((resolve) => {
  const ALL_LIKES_API_URL = InvoApiUrl + InvoApiIDLikes + likesUrl;
  getMealData(ALL_LIKES_API_URL).then((likesFromAPI) => {
    likesFromAPI.forEach((likeObject) => {
      foodList.setLikes(likeObject.item_id, likeObject.likes);
    });
    resolve();
  });
});

export const displayitemCounter = () => {
  const size = foodList.getItemsCount();
  itemCounter.innerHTML = `<span class="food-count-icon">${size}<span>`;
};
