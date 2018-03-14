// ------------------ display weekly selection movies ---------------------- //

var selectionContainer = document.querySelector('.main__selection-container');
var grid = document.querySelector('.main__selection-container__grid');
var j = 1;

displayWeeklySelection();

function displayWeeklySelection() {
  data.films.forEach(function(movie) {
    if (movie.weekMovie) {
      var weekMovie = document.createElement('IMG');
      weekMovie.setAttribute('src', movie.img);
      weekMovie.classList.add('main__selection-container__grid__week-movie');
      grid.appendChild(weekMovie);
      j++;
    };
  })
}

// ------------------ display selected movie ---------------------- //

var selection = document.querySelectorAll('.main__selection-container__grid > img');
var selectedMovie = document.querySelector('.main__selected-movie');
var categoryTitle = document.querySelector('.main__selection-container__categoryTitle');
var movieTitle = document.querySelector('.main__selected-movie__movieTitle');
var duration = document.querySelector('.main__selected-movie__description-ctn__duration');
var author = document.querySelector('.main__selected-movie__description-ctn__author');
var resume = document.querySelector('.main__selected-movie__description-ctn__resume');
var backButton = document.querySelector('.main__selected-movie__button');
var video = document.querySelector('.main__selected-movie__video');

function displaySelection() {
  selection.forEach(function(movie) {
    movie.addEventListener('click', function(event) {
      var src = this.getAttribute('src');
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
    })
  })
}

displaySelection();

backButton.addEventListener('click', function() {
  selectionContainer.classList.remove('--hidden');
  selectedMovie.classList.remove('--visible');
  video.pause();
})

var mobileMenu = document.querySelector('.header__menu-mobile');
var mobileMenuDetails = document.querySelector('.header__menu-mobile-details');

mobileMenu.addEventListener('click', function(event) {
  mobileMenuDetails.classList.toggle('--visible');
  mobileMenu.classList.toggle('--open');
});

//-------------------CATEGORIES----------------------//

const categories = document.querySelectorAll('.header__menu-mobile-details__category');
var current;

categories.forEach(function(category) {
  category.addEventListener('click', function(event) {
    var movies = '';
    category = event.target.textContent;
    current = category;
    if (category === 'Weekly selection') {
      data.films.forEach(function(movie) {
        if (movie.weekMovie) {
          movies += "<img class=main__selection-container__grid__week-movie src=" + movie.img + ">";
        }
      })
      categoryTitle.innerHTML = 'Weekly selection';
    } else if (category === 'All movies') {
      data.films.forEach(function(movie) {
        movies += "<img class=main__selection-container__grid__week-movie src=" + movie.img + ">";
      })
      categoryTitle.innerHTML = 'All movies';
    } else {
      data.films.forEach(function(movie) {
        if (movie.category === category) {
          movies += "<img class=main__selection-container__grid__week-movie src=" + movie.img + ">";
        };
      })
      categoryTitle.innerHTML = category;
    }
    if (selectionContainer.classList.contains('--hidden')) {
      selectionContainer.classList.remove('--hidden');
    }
    grid.innerHTML = movies;
    mobileMenuDetails.classList.remove('--visible');
    mobileMenu.classList.remove('--open');
    selectedMovie.classList.remove('--visible');
    selection = document.querySelectorAll('.main__selection-container__grid > img');
    displaySelection();
  })
})
