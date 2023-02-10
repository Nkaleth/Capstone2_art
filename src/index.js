import './style.css';
import { closePopUp, openComments, addNewComment, newID, loadComments } from './modules/comments_popup.js';
import loadData from './modules/Dom.js';
import { loadReserve, openReservations } from './modules/reserve.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/comments';

// const urlnewID = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');
const popupReservationContainer = document.querySelector('.reservationPopup');

const gallery = document.querySelector('.gallery');

loadData();
gallery.addEventListener('click', (event) => {
  const { target } = event;
  if (target.value === 'Comments') {
    openComments(target.id);
  }
  if (target.value === 'Reservations') {
    openReservations(target.id);
  }
});

popUpCommentsContainer.addEventListener('click', (event) => {
  const { target } = event;
  if (target.id === 'xclose') {
    closePopUp(popUpCommentsContainer);
  }
  const formComment = document.querySelector('.formComment');
  const { username, comment } = formComment.elements;
  formComment.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(username.value, comment.value, formComment.id);
    addNewComment(formComment.id, username.value, comment.value);
    formComment.reset();
  });
});

/* Reservations part */

popupReservationContainer.addEventListener('click', (event) => {
  const { target } = event;
  if (target.id === 'xclose') {
    closePopUp(popupReservationContainer);
  }
  const formComment = document.querySelector('.formComment');
  const { username, comment } = formComment.elements;
  formComment.addEventListener('submit', (event) => {
    event.preventDefault();

    formComment.reset();
  });
});

loadReserve();

