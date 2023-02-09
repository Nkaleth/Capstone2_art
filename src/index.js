import './style.css';
import { openComments } from './modules/comments_popup.js';
import loadData from './modules/Dom.js';

const gallery = document.querySelector('.gallery');

loadData();
gallery.addEventListener('click', (event) => {
  const { target } = event;
  if (target.value === 'Comments') {
    openComments(target.id);
  }
});
