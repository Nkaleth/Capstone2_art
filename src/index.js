<<<<<<< HEAD
/* import _ from 'lodash'; */
import './style.css';
import { Xclose, openComments } from './modules/comments_popup.js';

const xclose = document.getElementById('xclose');
const buttonTest = document.getElementById('436453');
// const popUpComments = document.querySelector('.popUpComments');

xclose.src = Xclose;

buttonTest.addEventListener('click', () => {
  openComments(488126);
});
=======
import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Art', 'Gallery!'], ' ');
  element.classList.add('art');
  return element;
}

document.body.appendChild(component());
>>>>>>> development
