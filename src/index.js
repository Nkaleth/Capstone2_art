import './style.css';
import { closePopUp, openComments } from './modules/comments_popup.js';
import loadData from './modules/Dom.js';
<<<<<<< HEAD
import { loadReserve, openReservations } from './modules/reserve.js';
=======
import { likeArts } from './modules/api.js';
import getCounts from './modules/itemsCounter.js';
>>>>>>> development

getCounts();

<<<<<<< HEAD
// const urlnewID = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');
const popupReservationContainer = document.querySelector('.reservationPopup');
=======
const popUpCommentsContainer = document.querySelector(
  '.containerCommentsPopUp',
);
>>>>>>> development

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
    let numlikes = Number(target.alt.replace(/^\D+/g, ''));
    numlikes += 1;
    const likecontainer = document.getElementById(`spl${idlikefiltered}`);
    likecontainer.innerHTML = `Likes(${numlikes})`;
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

