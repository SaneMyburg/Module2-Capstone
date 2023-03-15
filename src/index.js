import './style.css';
import MealList from './Modules/display.js';



window.addEventListener('DOMContentLoaded', () => {
  const mealList = new MealList();
  mealList.getData();
});
