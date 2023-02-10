const itemsCounter = (series) => {
  const seriesNumber = series.length;
  // console.log(seriesNumber);
  const seriesMenu = document.querySelector('.fd-count');
  seriesMenu.textContent = `Series (${seriesNumber})`;
};

export default itemsCounter;
