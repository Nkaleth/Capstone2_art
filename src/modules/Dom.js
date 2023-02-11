import ht2 from "../images/heart2.png";
// import countGallery from './countGallery.js';
import { likeArts, getLikes } from "./api.js";

const URL =
  "https://collectionapi.metmuseum.org/public/collection/v1/search?q=Auguste+Renoir&showOnly=openAccess%7CwithImage%7ConDisplay&isPublicDomain=true&hasImages=true";

let stringPaintings = "";

const loadData = async () => {
  const request = new Request(URL);
  const response = await fetch(request);
  const data = await response.json();
  const IDs = data.objectIDs;
  IDs.forEach((element) => {
    const readIds = async (element) => {
      const gallery = document.querySelector(".gallery");
      const request = new Request(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`
      );
      const response = await fetch(request);
      const data = await response.json();
      const numLikes = await getLikes(data.objectIDs);
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
                                          <span class="likes-count">${numLikes}<span> likes</span></span>
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

const likeButtons = document.querySelectorAll(".like");
console.log("daddadd", likeButtons);
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", async (event) => {
    const paintingId =
      event.target.parentNode.parentNode.querySelector(".bComments").id;
    await addLike(paintingId);
    // const numLikes = await getLikes(paintingId);
    event.target.parentNode.parentNode.querySelector(
      ".likes-count"
    ).innerHTML = `${numLikes} likes`;
  });
});

