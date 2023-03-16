import './style.css';
import {
  showAllFood,
  getAllFoodData,
  getAllLikes,
  displayitemCounter,
} from './Modules/Methods-all.js';

getAllFoodData().then(() => {
  getAllLikes()
    .then(() => {
      showAllFood();
    })
    .then(() => {
      displayitemCounter();
    });
});
