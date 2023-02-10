import Xclose from '../images/close.svg';

const popupReservation = document.querySelector('.reservationPopup');

const loadReserve = async (container, id) => {
  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/reservations?item_id=${id}`);
  const response = await fetch(request);
  const data = await response.json();
  let string = '';
  data.forEach((element) => {
    console.log(element);
    string += `<li class="userDetails">  ${element.username} ${element.start_date}: ${element.end_date}</li>`;
  });
  container.innerHTML = string;
};

const openReservations = async (id) => {
  const link = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const request = new Request(link);
  const response = await fetch(request);
  const data = await response.json();
  const stringReservePopup = `<article class="popUpComments" id=${data.objectID}>
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
                              <section class="divComments">
                                  <p class="countComments">Reservations</p>
                                  <ul class="listComments" id="c${data.objectID}">
                                  </ul>
                              </section>
                              <section class="addReservation">
                                  <p>Add a reservation</p>
                                  <form id="r${data.objectID}" class="formReserve" action="">
                                  <label>Enter your name:</label>            
                                  <input type="text" id="name" name="user_name" maxlength="30" placeholder="your name" required>
                              
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
  const containerComments = document.getElementById(`r${data.objectID}`);
  loadReserve(containerComments, data.objectID);
};

const closePopUp = (container) => {
  container.setAttribute('style', 'display: none');
};

const addNewReservation = (itemid, username, start_date, end_date, url) => {
  const sendData = async (link) => {
    const request = new Request(link);
    await fetch(request, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${itemid}`,
        username: `${username}`,
        date: `${start_date}`,
        date: `${end_date}`,
      }),
    });
  };
  sendData(url);
};

export {
  Xclose, openReservations, closePopUp, addNewReservation, loadReserve,
};