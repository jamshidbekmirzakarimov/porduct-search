const elSearchForm = document.querySelector(".js-search-form");
const elSearchInput = elSearchForm.querySelector(".js-search-input");
const elMoviesList = document.querySelector(".js-movies-list");
const elMovieTemplate = document.querySelector(".js-movie-temp").content;
// const newMovieFragment = document.createDocumentFragment();
// console.log(elSearchForm, elSearchInput, elMovieTemplate, elMoviesList);
// console.log(elMovieTemplate);

const API_PATH = "http://www.omdbapi.com/?apikey=791fd94c&s=";

elSearchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  elMoviesList.innerHTML = null;
  const inputValue = elSearchInput.value.trim();

  fetch(API_PATH + inputValue)
    .then((response) => response.json())
    .then((data) => data.Search.forEach((movie) => {
        const elMovie = elMovieTemplate.cloneNode(true);
        elMovie.querySelector(".js-movie-img").src = movie.Poster;
        elMovie.querySelector(".js-movie-img").alt = movie.Title;
        elMovie.querySelector(".js-movie-title").textContent = movie.Title;
        elMovie.querySelector(".js-movie-type").textContent = movie.Type;
        elMovie.querySelector(".js-movie-year").textContent = movie.Year;
        
        elMoviesList.appendChild(elMovie);
    }))
    .catch((error) => console.error(error.message));
});

// elMoviesList.appendChild(newMovieFragment);
