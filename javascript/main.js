// ------------------ display weekly selection movies ---------------------- //

var selectionContainer = document.querySelector('.main__selection-container');
var grid = document.querySelector('.main__selection-container__grid');

displayWeeklySelection();

function displayWeeklySelection() {
  var movies = '';
  data.films.forEach(function(movie) {
    if (movie.weekMovie) {
      movies += "<div class=main__selection-container__grid__img-container><img class=main__selection-container__grid__img-container__img src=" + movie.img + "><div class=main__selection-container__grid__img-container__play-sign-container><img class=main__selection-container__grid__img-container__play-sign-container__play-sign src=img/play-sign-white.png></div><p class=main__selection-container__grid__title>" + movie.title + "</p></div>";
    }
  })
  grid.innerHTML = movies;
  selection = document.querySelectorAll('.main__selection-container__grid > img');
  displaySelection();
}

// ------------------ display selected movie ---------------------- //

var selection = document.querySelectorAll('.main__selection-container__grid__img-container__play-sign-container');
var selectedMovie = document.querySelector('.main__selected-movie');
var categoryTitle = document.querySelector('.main__selection-container__categoryTitle');
var movieTitle = document.querySelector('.main__selected-movie__movieTitle');
var duration = document.querySelector('.main__selected-movie__description-ctn__duration');
var author = document.querySelector('.main__selected-movie__description-ctn__author');
var resume = document.querySelector('.main__selected-movie__description-ctn__resume');
var backButton = document.querySelector('.main__selected-movie__button');
var video = document.querySelector('.main__selected-movie__video');
var element;

function displaySelection() {
  selection.forEach(function(movie) {
    movie.addEventListener('click', function(event) {
      element = this.previousSibling;
      console.log(element);
      var src = element.getAttribute('src');
      data.films.forEach(function(movie) {
        if (movie.img === src) {
          video.setAttribute('src', `videos/${movie.src}`);
          movieTitle.innerHTML = movie.title;
          duration.innerHTML = `Duration : ${movie.duration}`;
          author.innerHTML = `Author : ${movie.author}`;
          resume.innerHTML = movie.description;
        }
      });
      selectionContainer.classList.add('--hidden');
      selectedMovie.classList.add('--visible');
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    })
  })
}

displaySelection();

backButton.addEventListener('click', function() {
  selectionContainer.classList.remove('--hidden');
  selectedMovie.classList.remove('--visible');
  video.pause();
})

var profileIcon = document.querySelector('.header__profile-container__img');
var dropdownMenu = document.querySelector('.header__dropdown-list');
var footer = document.querySelector('.footer');

profileIcon.addEventListener('click', function(event) {
  dropdownMenu.classList.toggle('--visible');
  selectionContainer.classList.toggle('--hidden');
  footer.classList.toggle('--hidden');
});

//-------------------CATEGORIES----------------------//

var categoriesButton = document.querySelector('.main__selection-container__wrapper-container__button');
const dropdownList = document.querySelector('.main__selection-container__wrapper-container__wrapper__dropdown-list')
const categories = document.querySelectorAll('.--category');

categoriesButton.addEventListener('click', function(event) {
  dropdownList.classList.toggle('--visible');
  console.log(categories);
})

categories.forEach(function(category) {
  category.addEventListener('click', function(event) {
    dropdownList.classList.remove('--visible');
    var movies = '';
    category = event.target.textContent;
    console.log(category);
    current = category;
    if (category === 'Weekly selection') {
      data.films.forEach(function(movie) {
        if (movie.weekMovie) {
          movies += "<div class=main__selection-container__grid__img-container><img class=main__selection-container__grid__img-container__img src=" + movie.img + "><div class=main__selection-container__grid__img-container__play-sign-container><img class=main__selection-container__grid__img-container__play-sign-container__play-sign src=img/play-sign-white.png></div><p class=main__selection-container__grid__title>" + movie.title + "</p></div>";
        }
      })
      categoryTitle.innerHTML = 'Weekly selection';
    } else if (category === 'All movies') {
      data.films.forEach(function(movie) {
        movies += "<div class=main__selection-container__grid__img-container><img class=main__selection-container__grid__img-container__img src=" + movie.img + "><div class=main__selection-container__grid__img-container__play-sign-container><img class=main__selection-container__grid__img-container__play-sign-container__play-sign src=img/play-sign-white.png></div><p class=main__selection-container__grid__title>" + movie.title + "</p></div>";
      })
      categoryTitle.innerHTML = 'All movies';
    } else {
      data.films.forEach(function(movie) {
        if (movie.category === category) {
          movies += "<div class=main__selection-container__grid__img-container><img class=main__selection-container__grid__img-container__img src=" + movie.img + "><div class=main__selection-container__grid__img-container__play-sign-container><img class=main__selection-container__grid__img-container__play-sign-container__play-sign src=img/play-sign-white.png></div><p class=main__selection-container__grid__title>" + movie.title + "</p></div>";
        };
      })
    }
    if (selectionContainer.classList.contains('--hidden')) {
      selectionContainer.classList.remove('--hidden');
    }
    grid.innerHTML = movies;
    selection = document.querySelectorAll('.main__selection-container__grid__img-container__play-sign-container');
    displaySelection();
  })
})
