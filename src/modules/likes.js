// import ht from "../img/heart.png";
import loadarts from './arts.js';

const addlikes = async (itemId) => {
  await $.post(
    `${process.env.BaseURL}likes/`,
    {
      item_id: itemId,
    },
    (data, status) => {
      if (status === 'success') {
        loadarts();
      }
    },
  );
};

const getlikes = async () => {
  await $.get(`${process.env.BaseURL}likes/`, (data, status) => {
    if (status === 'success') {
      const nodes = document.querySelectorAll('.grid-item');
      nodes.forEach((node) => {
        const id = node.querySelector('#idCategory').innerText;
        const value = data.find((set) => set.item_id === id);
        if (value) {
          node.querySelector('.like img').src = ht;
          node.querySelector(
            '.likes-count',
          ).innerHTML = `${value.likes}<span> likes</span>`;
        }
      });
    }
  });
};
export { addlikes, getlikes };
