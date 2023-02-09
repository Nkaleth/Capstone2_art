import './style.css';
import { openComments } from './modules/comments_popup.js';
import loadData from './modules/Dom.js';
import { get } from 'lodash';

const buttonTest = document.getElementById('436453');
const gallery = document.querySelector('.gallery');

loadData();
gallery.addEventListener('click', (event) => {
  const { target } = event;
  console.log(target.id);
  /* here goes a code to detect the ID button of the painting */
  // openComments(6266929); /* here use the function with the ID */
});
