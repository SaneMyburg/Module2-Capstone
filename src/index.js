// index.js
import './style.css';
import getData from './Modules/display.js';
import { displayPopUp } from './Modules/popup.js';

getData();

const commentsButtons = document.querySelectorAll('.btn-comment');
commentsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    displayPopUp(button.parentElement.id);
  });
  console.log(id);
});