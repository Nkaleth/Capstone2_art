import ht2 from '../images/heart2.png';
// import countGallery from './countGallery.js';
// import { addlikes, getlikes } from "./likes.js";
const URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=Auguste+Renoir&showOnly=openAccess%7CwithImage%7ConDisplay&isPublicDomain=true&hasImages=true';

let stringPaintings = '';

const loadData = () => {
  const getdata = async () => {
    const request = new Request(URL);
    const response = await fetch(request);
    const data = await response.json();
    const IDs = data.objectIDs;
    IDs.forEach((element) => {
      const readIds = async (element) => {
        const gallery = document.querySelector('.gallery');
        const request = new Request(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`,
        );
        const response = await fetch(request);
        const data = await response.json();
        stringPaintings += `<div class="grid-item">  <!-- container for each painting-->
                                    <div class="paintings">
                                      <div>
                                        <img src= '${data.primaryImageSmall}' height="200" alt="PAINTING IMAGE">
                                        </div>
                                        <div class="paint-name">
                                        <p>${data.title}</p>
                                        <span class="like"><img src="${ht2}" alt="" width="15" height="15" srcset=""></span> 
                                        </div>         
                                      
                                      <div class="likes">
                                          <span class="likes-count">0<span> likes</span></span>
                                      </div>
                                      <div>
                                        <button id="${data.objectID}" class="bComments">Comments</button>
                                      </div>
                                      <div>
                                        <button id="${data.objectID}" class="bReservations">Reservations</button>
                                      </div>
                                  </div>
                                </div>`;
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
