import ht2 from '../images/heart2.png';
// import countGallery from './countGallery.js';
import { likeArts, getLikes } from './api.js';

let stringPaintings = '';

const URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=Auguste+Renoir&showOnly=openAccess%7CwithImage%7ConDisplay&isPublicDomain=true&hasImages=true';

const loadData = async () => {
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
      // const numLikes = await getLikes(data.objectIDs);
      // ${numLikes}
      stringPaintings += `<div class="grid-item">  <!-- container for each painting-->
                                    <div class="paintings">
                                      <div>
                                        <img src= '${data.primaryImageSmall}' height="200" alt="PAINTING IMAGE">
                                        </div>
                                        <div class="paint-name">
                                        <p>${data.title}</p>
                                        <span class="like"><img id="h${data.objectID}" src="${ht2}" alt="" width="15" height="15" srcset="" name="heart"></span> 
                                        </div>         
                                      
                                      <div class="likes">
                                          <span class="likes-count"><span> likes</span></span>
                                      </div>
                                      <div>
                                        <button id="${data.objectID}" class="bComments" value="Comments" >Comments</button>                            
                                      </div>
                                      <div>
                                        <button id="${data.objectID}" class="bReservations">Reservations</button>
                                      </div>
                                  </div>
                                </div>`;
      gallery.innerHTML = stringPaintings;
    };
    readIds(element);
  });
};

export default loadData;