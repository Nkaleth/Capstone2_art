export default async function getCounts() {
  try {
    const response = await fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/search?q=Auguste+Renoir&showOnly=openAccess%7CwithImage%7ConDisplay&isPublicDomain=true&hasImages=true',
    );
    const data = await response.json();
    const count = data.total;

    // update the count in a class .count
    const countContainer = document.querySelector('.fd-count');
    if (countContainer) {
      countContainer.textContent = count;
    }
    return countContainer;
  } catch (error) {
    return null;
  }
}