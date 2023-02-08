import './style.css';
import { Xclose, openComments } from './modules/comments_popup.js';

const xclose = document.getElementById('xclose');
const buttonTest = document.getElementById('436453');
// const popUpComments = document.querySelector('.popUpComments');

xclose.src = Xclose;

buttonTest.addEventListener('click', () => {
  openComments(488126);
});
