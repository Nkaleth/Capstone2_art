import Xclose from '../images/close.svg';

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
    const popUpCommentsContainer = document.querySelector('.containerCommentsPopUp');

    popUpCommentsContainer.innerHTML = stringCommentPopup;
  };
  getdata();
};

export { Xclose, openComments };