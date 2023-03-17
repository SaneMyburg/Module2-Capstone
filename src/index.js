import './style.css';
import {
  mealsShowAll,
  getAllFoodData,
  getAllLikes,
  ItemCounterDisplay,
} from './Modules/Methods-all.js';

getAllFoodData().then(() => {
  getAllLikes()
    .then(() => {
      mealsShowAll();
    })
    .then(() => {
      ItemCounterDisplay();
    });
});
