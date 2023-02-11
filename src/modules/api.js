// Involvement API app_id: kpvz19cjHtM9ksn2bg7S

const invAPI =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AIzaSyCoZDomxnvVKAA5OOQ5orghTT-QQaZ13FU/likes";

const likeArts = async (id) => {
  const API_URL = invAPI;
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const getLikes = async () => {
  const API_URL = invAPI;
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log(data);
  return data;
};

export { likeArts, getLikes };

