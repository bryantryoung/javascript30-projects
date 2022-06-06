const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

fetch(endpoint)
  .then((data) => data.json())
  .then((arr) => (cities = arr)); // could also use spread to achieve same end: cities.push(...arr)

function findMatches(input, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(input, "gi"); // g means global, i means insensitive to case
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">Pop: ${numberWithCommas(
          place.population
        )}</span>
      </li>
      `;
    })
    .join("");
  suggestions.innerHTML = html;
}

// function pulled from stack overflow that places commas in our numbers
// to better format population as it's displayed
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
