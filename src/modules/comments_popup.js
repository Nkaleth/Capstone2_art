import Xclose from '../images/close.svg';

const popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');

const openComments = (id) => {
  const link = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const getdata = async () => {
    const request = new Request(link);
    const response = await fetch(request);
    const data = await response.json();
    const stringCommentPopup = `<article class="popUpComments">
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
                                  <p class="countComments">Comments 2</p>
                                  <ul class="listComments">
                                      <li class="userComment"> 07/02/2023 Alex: I'd love to buy it!</li>
                                  </ul>
                              </section>
                              <section class="addComment">
                                  <p>Add a comment</p>
                                  <form class="formComment" action="">
                                      <input class="username" type="text" name="" id="username" placeholder="Your name" required>
                                      <input class="comment" type="text" name="" id="comment" placeholder="Your insights" required>
                                      <button class="addCommentButton" type="submit">Comment</button>
                                  </form>
                              </section>
                          </article>`;
    popUpCommentsContainer.innerHTML = stringCommentPopup;
    popUpCommentsContainer.setAttribute('style', 'display: block');
  };
  getdata();
};

const closePopUp = (container) => {
  container.setAttribute('style', 'display: none');
};

const sendData = async (link) => {
  const request = new Request(link);
  const response = await fetch(request, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  console.log(data);
};

const addNewComment = (item_id,username, comment) => {
  const sendData = async (link) => {
    const request = new Request(link);
    const response = await fetch(request, {
      method: 'POST',
      body: JSON.stringify({
        item_id: 'item1',
        username: 'Jane',
        comment: 'Hello',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    await response.json();
  };
  sendData(url);
};

const loadComments = () => {
  const getData = async (link) => {
    const request = new Request(link);
    const response = await fetch(request);
    const data = await response.json();
    const { result } = data;
    const scoresList = document.querySelector('.scoresList');
    let string = '';
    result.forEach((element) => {
      string += `<li class="indivScore"><img src="https://playvalorant.com/assets/images/leaderboards/radiant-badge.png" alt="badge"><p>${element.score}</p><p>${element.user}</p></li>`;
    });
    scoresList.innerHTML = string;
  };
  getData(url);
};

export {
  Xclose, openComments, closePopUp, sendData, addNewComment, loadComments
};