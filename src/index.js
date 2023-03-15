import './style.css';
import MealList from './Modules/display.js';

const mealList = new MealList();

window.addEventListener('DOMContentLoaded', () => {
  mealList.getData();
});
