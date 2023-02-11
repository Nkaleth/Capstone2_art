import Xclose from '../images/close.svg';
import countData from './countreservations.js';

const popupReservation = document.querySelector('.reservationPopup');

const loadReserve = async (container, id) => {
  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/reservations?item_id=${id}`);
  const response = await fetch(request);
  const data = await response.json();
  const count = countData(data);
  const divCount = document.querySelector('.countReservations');
  divCount.innerHTML = count;
  let string = '';
  data.forEach((element) => {
    string += `<li class="userDetails">  ${element.username} ${element.date_start}: ${element.date_end}</li>`;
  });
  container.innerHTML = string;
  return count;
};

const addNewReservation = async (idItem, startdate, enddate, username) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/reservations/';
  const containerReserves = document.getElementById(`cr${idItem}`);
  const user = username;
  const startdate1 = startdate;
  const enddate1 = enddate;
  const dataToPost = {
    item_id: idItem,
    username: user,
    date_start: startdate1,
    date_end: enddate1,
  };
  // console.log(JSON.stringify(dataToPost));
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPost),
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  loadReserve(containerReserves, idItem);
};

const openReservations = async (id) => {
  const link = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const request = new Request(link);
  const response = await fetch(request);
  const data = await response.json();
  const stringReservePopup = `<article class="popUpReservations" id=${data.objectID}>
                              <img id="xclose" class="xclose" src = "${Xclose}">
                              <section class="imageComments">
                                  <img src=${data.primaryImage} alt="" srcset="">
                              </section>
                              <section class ="detailsComments" >
                                  <p class="titleComments">${data.title}</p>
                                  <ul class="dataPaintingComments">
                                      <li>Year: ${data.accessionYear}</li>
                                      <li>Artist : ${data.artistDisplayName}</li>
                                      <li>Nationality : ${data.artistNationality}</li>
                                      <li>Medium : ${data.medium}</li>
                                  </ul>
                              </section>
                              <section class="divReservations">
                                  <p class="countReservations">Reservations(0)</p>
                                  <ul class="listReservations" id="cr${data.objectID}">
                                  </ul>
                              </section>
                              <section class="addReservation">
                                  <p>Add a reservation</p>
                                  <form id="r${data.objectID}" class="formReserve" action="">
                                  <label>Enter your name:</label>            
                                  <input type="text" id="username" name="user_name" maxlength="30" placeholder="your name" required>
                              
                                  <label>Start Date:</label>
                                  <input type="date" id="startDate"  placeholder="start date" required>
                              
                                  <label>End Date:</label>
                                  <input type="date" id="endDate" placeholder="end date" required>
                                  <button class="reserveButton" type="submit">Reserve</button>
                                  </form>
                              </section>
                            </article>`;
  popupReservation.innerHTML = stringReservePopup;
  popupReservation.setAttribute('style', 'display: block');
  const containerReservations = document.getElementById(`cr${data.objectID}`);
  loadReserve(containerReservations, data.objectID);
  const formReservations = document.querySelector(`#r${data.objectID}`);
  formReservations.addEventListener('submit', (e) => {
    e.preventDefault();
    const { username, startDate, endDate } = formReservations.elements;
    addNewReservation(data.objectID, startDate.value, endDate.value, username.value);
    formReservations.reset();
  });
};

const closePopUp = (container) => {
  container.setAttribute('style', 'display: none');
};

export {
  Xclose, openReservations, closePopUp, addNewReservation, loadReserve,
};
