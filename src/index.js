import './style.css';
import { openComments } from './modules/comments_popup.js';
import loadData from './modules/Dom.js';
import { openReservations } from './modules/reserve.js';

const buttonTest = document.getElementById('436453');
// const popUpComments = document.querySelector('.popUpComments');

loadData();
buttonTest.addEventListener('click', () => {
  /* here goes a code to detect the ID button of the painting */
  openComments(6266929); /* here use the function with the ID */
});
buttonTest.addEventListener('click', () => {
  /* here goes a code to detect the ID button of the painting */
  openReservations(6266929); /* here use the function with the ID */
});