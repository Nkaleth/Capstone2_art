import _ from "lodash";
import "./style.css";
// import $ from 'jquery';
import loadarts from "./modules/arts.js";
import { innerData } from "./modules/Dom.js";

innerData();

loadarts();

// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Art', 'Gallery!'], ' ');
//   element.classList.add('art');
//   return element;
// }

// document.body.appendChild(component());

