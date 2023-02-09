import Xclose from '../images/close.svg';

const popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');

const loadComments = async (container, id) => {
  const request = new Request(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aCIWbt6ixkSGou3TfOCc/comments?item_id=${id}`);
  const response = await fetch(request);
  const data = await response.json();
  let string = '';
  data.forEach((element) => {
    console.log(element);
    string += `<li class="userComment">  ${element.creation_date} ${element.username}: ${element.comment}</li>`;
  });
  container.innerHTML = string;
};

const openComments = async (id) => {
  const link = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const request = new Request(link);
  const response = await fetch(request);
  const data = await response.json();
  const stringCommentPopup = `<article class="popUpComments" id=${data.objectID}>
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
                                  <ul class="listComments" id="c${data.objectID}">
                                  </ul>
                              </section>
                              <section class="addComment">
                                  <p>Add a comment</p>
                                  <form id="${data.objectID}" class="formComment" action="">
                                      <input class="username" type="text" name="" id="username" placeholder="Your name" required>
                                      <input class="comment" type="text" name="" id="comment" placeholder="Your insights" required>
                                      <button class="addCommentButton" type="submit">Comment</button>
                                  </form>
                              </section>
                          </article>`;
  popUpCommentsContainer.innerHTML = stringCommentPopup;
  popUpCommentsContainer.setAttribute('style', 'display: block');
  const containerComments = document.getElementById(`c${data.objectID}`);
  loadComments(containerComments, data.objectID);
};

const closePopUp = (container) => {
  container.setAttribute('style', 'display: none');
};

const newID = async (link) => {
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

const addNewComment = (itemid, username, comment, url) => {
  const sendData = async (link) => {
    const request = new Request(link);
    await fetch(request, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${itemid}`,
        username: `${username}`,
        comment: `${comment}`,
      }),
    });
  };
  sendData(url);
};

export {
  Xclose, openComments, closePopUp, newID, addNewComment, loadComments,
};