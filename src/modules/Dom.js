// import ht2 from '../img/heart2.png';
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
                                        <button id="${data.objectID}" class="bComments" value="Comments" >Comments</button>                            
                                      </div>
                                      <div>
                                        <button id="${data.objectID}" class="bReservations">Reservations</button>
                                      </div>
                                  </div>
                                </article>`;
        gallery.innerHTML = stringPaintings;
      };
      readIds(element);
    });
  };
  getdata();
};

export default loadData;