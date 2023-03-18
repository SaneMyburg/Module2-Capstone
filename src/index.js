// index.js
import './style.css';
import {
  mealsShowAll,
  getAllFoodData,
  getAllLikes,
  ItemCounterDisplay,
} from './Modules/Methods-all.js';
import contactsPopUp from './Modules/contact.js';

getAllFoodData().then(() => {
  getAllLikes()
    .then(() => {
      mealsShowAll();
    })
    .then(() => {
      ItemCounterDisplay();
    });
});

const contactInfo = document.getElementById('contact-info');
contactInfo.addEventListener('click', () => {
  contactsPopUp();
});
