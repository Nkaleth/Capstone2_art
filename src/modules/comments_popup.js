import Xclose from '../images/close.svg';

const openComments = (id) => {
  const link = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const getdata = async () => {
    const request = new Request(link);
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    // console.log(data.accessionYear, data.artistNationality);
    // console.log(data.medium, data.artistDisplayName, data.primaryImage);
  };
  getdata();
};

export { Xclose, openComments };