import './style.css';
import { openComments } from './modules/comments_popup.js';

const buttonTest = document.getElementById('436453');
// const popUpComments = document.querySelector('.popUpComments');

buttonTest.addEventListener('click', () => {
  /* here goes a code to detect the ID button of the painting */
  openComments(6266929); /* here use the function with the ID */
});
