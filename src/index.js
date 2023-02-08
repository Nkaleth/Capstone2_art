import './style.css';
import { openComments } from './modules/comments_popup.js';

const buttonTest = document.getElementById('436453');
// const popUpComments = document.querySelector('.popUpComments');

buttonTest.addEventListener('click', () => {
  openComments(626692);
});
