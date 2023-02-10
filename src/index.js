import './style.css';
import {
  closePopUp, openComments,
} from './modules/comments_popup.js';
import loadData from './modules/Dom.js';
import { likeArts } from './modules/api';

const popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');

const gallery = document.querySelector('.gallery');

loadData();
gallery.addEventListener('click', (event) => {
  const { target } = event;
  if (target.value === 'Comments') {
    openComments(target.id);
  } else if (target.name === 'heart') {
    const idlike = target.id;
    const idlikefiltered = idlike.replace(/^\D+/g, '');
    likeArts(idlikefiltered);
  }
});

popUpCommentsContainer.addEventListener('click', (event) => {
  const { target } = event;
  if (target.id === 'xclose') {
    closePopUp(popUpCommentsContainer);
  }
});

/* Likes */

const likeButtons = document.querySelectorAll('.like');
console.log('daddadd', likeButtons);
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener('click', async (event) => {
    // const paintingId = event.target.parentNode.parentNode.querySelector('.bComments').id;
    // await addLike(paintingId);
    // // const numLikes = await getLikes(paintingId);
    // event.target.parentNode.parentNode.querySelector(
    //   '.likes-count',
    // ).innerHTML = `${numLikes} likes`;
  });
});
