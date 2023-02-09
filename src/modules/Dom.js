// import ht2 from '../img/heart2.png';
import countGallery from './countGallery.js';
// import { addlikes, getlikes } from "./likes.js";

const container = document.querySelector('.container');

const like = (element) => {
  addlikes(element);
};

const innerData = (arts) => {
  const URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste%20Renoir&showOnly=openAccess';
  const fetchData = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  };
  fetchData(URL);
  const holder = document.createElement('div');
  holder.classList.add('grid-container');
  arts.forEach((art) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="grid-item">
          <div class="food">
              <div>
                 <span style="display: none" id="idCategory">${art.id}</span>
                  <img src="${art.artist_display}" height="200" alt="">
              </div>
              <div class="food-name">
                  <span>${art.title}</span>
                  <span class="like"><img src="${ht2}" alt="" width="15" height="15" srcset=""></span>
              </div>
              <div class="likes">
                  <span class="likes-count">0<span> likes</span></span>
              </div>
              <div>
               <input type="button" value="comments">
              </div>
          </div>
      </div>`;
    div.querySelector('.like').addEventListener('click', (e) => {
      like(
        e.target.parentNode.parentNode.parentNode.querySelector('#idCategory')
          .innerText,
      );
    });
    holder.appendChild(div);
  });
  return holder;
};

const fillDom = (arts) => {
  container.append(innerData(arts));
  countGallery(arts.length);
  getlikes();
};

export { fillDom, innerData };
