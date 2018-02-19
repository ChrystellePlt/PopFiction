var mainContainer = document.querySelector('.main-container');
var weeklySelectionContainer = document.createElement('DIV');
weeklySelectionContainer.classList.add('main-container__weekly-selection-container');
mainContainer.appendChild(weeklySelectionContainer);

var j = 1;

for (var i = 0; i < data.films.length; i++) {
  if (data.films[i].weekMovie) {
    var weekMovie = document.createElement('IMG');
    weekMovie.setAttribute('src', data.films[i].img);
    weekMovie.classList.add(`main-container__weekly-selection-container__week-movie-${j}`);
    weeklySelectionContainer.appendChild(weekMovie);
    j++;
  };
}

var parent = document.querySelector('.main-container');
var child = document.querySelector('.main-container__weekly-selection-container')
var weeklySelection = document.querySelectorAll('.main-container__weekly-selection-container > img');
var title;
var duration;
var author;
var description;

for (var i = 0; i < weeklySelection.length; i++) {
  weeklySelection[i].addEventListener('click', function(event) {
    var src = this.getAttribute('src');
    parent.removeChild(child);

    var selectedMovieContainer = document.createElement('DIV');
    selectedMovieContainer.classList.add('main-container__selected-movie-container');
    mainContainer.appendChild(selectedMovieContainer);
    var selectedMovie = document.createElement('IMG');
    selectedMovieContainer.classList.add('main-container__selected-movie-container__img');
    selectedMovieContainer.appendChild(selectedMovie);
    selectedMovie.setAttribute('src', src);

    var selectedMovieResumeContainer = document.createElement('DIV');
    selectedMovieResumeContainer.classList.add('main-container__selected-movie-resume-container');
    mainContainer.appendChild(selectedMovieResumeContainer);

    createHTMLNode(title, 'P', selectedMovieResumeContainer, 'main-container__selected-movie-resume-container__title');

    createHTMLNode(duration, 'P', selectedMovieResumeContainer, 'main-container__selected-movie-resume-container__duration');

    createHTMLNode(author, 'P', selectedMovieResumeContainer, 'main-container__selected-movie-resume-container__author');

    createHTMLNode(description, 'P', selectedMovieResumeContainer, 'main-container__selected-movie-resume-container__description');

    title = document.querySelector('.main-container__selected-movie-resume-container__title');
    duration = document.querySelector('.main-container__selected-movie-resume-container__duration');
    author = document.querySelector('.main-container__selected-movie-resume-container__author');
    description = document.querySelector('.main-container__selected-movie-resume-container__description');

    for (var i = 0; i < data.films.length; i++) {
      if (data.films[i].img === src) {
        title.innerHTML = data.films[i].title;
        duration.innerHTML = data.films[i].duration;
        author.innerHTML = data.films[i].author;
        description.innerHTML = data.films[i].description;
      }
    }
  })
}

function createHTMLNode(child, tag, parent, className) {
  var child = document.createElement(tag);
  child.classList.add(className);
  parent.appendChild(child);
}
