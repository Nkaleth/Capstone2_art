const countData = (data) => {
  let count = 0;
  if (!data) {
    return 'No comments';
  }
  data.forEach(() => {
    count += 1;
  });
  return `Comments(${count})`;
};

export default countData;