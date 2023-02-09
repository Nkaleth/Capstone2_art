// import ht2 from '../img/heart2.png';
// import countGallery from './countGallery.js';
// import { addlikes, getlikes } from "./likes.js";
const URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=Auguste+Renoir&showOnly=openAccess%7CwithImage%7ConDisplay%7Chighlights&material=Canvas';

let stringPaintings = '';

const loadData = () => {
  const getdata = async () => {
    const request = new Request(URL);
    const response = await fetch(request);
    const data = await response.json();
    const IDs = data.objectIDs;
    IDs.forEach((element) => {
      const readIds = async (element) => {
        const request = new Request(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`);
        const response = await fetch(request);
        const data = await response.json();
        stringPaintings += `<article class="painting">  <!-- container for each painting-->
                                    <div class="painting">
                                      <div>
                                        <img src= '${data.primaryImageSmall}' height="200" alt="PAINTING IMAGE">
                                        <p>${data.title}</p>          
                                      </div>
                                      <div class="likes">
                                          <span class="likes-count">0<span> likes</span></span>
                                      </div>
                                      <div>
                                      <input id="${data.objectID}" type="button" value="Comments">
                                      </div>
                                      <div>
                                        <input class="reservationBtn" id="${data.objectID}" type="button" value="Reservations">
                                      </div>
                                  </div>
                                </article>`;
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = stringPaintings;

        const reservationBtns = document.querySelectorAll('.reservationBtn');
        reservationBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
            const reservationPopup = document.querySelector('#reservationPopup');
            reservationPopup.style.display = 'block';

            // retrieve details of the selected item
            const itemTitle = document.querySelector('#itemDetails h1');
            itemTitle.textContent = data.title;
            const itemImage = document.querySelector('#itemDetails #eachImage');
            itemImage.src = data.primaryImageSmall;
            const itemFeatures = document.querySelector('#itemDetails #features');
            itemFeatures.innerHTML = ''; // clear previous content
            data.contextualtext.forEach((feature) => {
              const li = document.createElement('li');
              li.textContent = feature;
              itemFeatures.appendChild(li);
            });
          });
        });
      };
      readIds(element);
    });
  };
  getdata();
};



export default loadData;