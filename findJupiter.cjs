const { image_search } = require('duckduckgo-images-api');
const fs = require('fs');

async function fetchJupiter() {
  try {
    const res = await image_search({ query: 'jupiter map equirectangular texture high res', moderate: true, retries: 2, iterations: 1 });
    console.log(res[0].image);
  } catch (e) {
    console.log(`Error`);
  }
}

fetchJupiter();