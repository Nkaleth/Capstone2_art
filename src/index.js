import './style.css';
import { closePopUp, openComments } from './modules/comments_popup.js';
import loadData from './modules/Dom.js';
import { openReservations } from './modules/reserve.js';
import { likeArts } from './modules/api.js';
import getCounts from './modules/itemsCounter.js';

getCounts();

const popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');
const popupReservationContainer = document.querySelector('.reservationPopup');

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
});
