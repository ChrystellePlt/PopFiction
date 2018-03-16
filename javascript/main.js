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

function displayFavorites() {
  var movies = '';
  data.films.forEach(function(movie) {
    if (movie.favorites) {
      movies += "<div class=main__selection-container__grid__img-container><img class=main__selection-container__grid__img-container__img src=" + movie.img + "><div class=main__selection-container__grid__img-container__play-sign-container><img class=main__selection-container__grid__img-container__play-sign-container__play-sign src=img/play-sign-white.png></div><p class=main__selection-container__grid__title>" + movie.title + "</p></div>";
    }
  })
  grid.innerHTML = movies;
  selectedCategory.innerHTML = 'My Favorites';
  categoriesButton.classList.add('--hidden');
  selection = document.querySelectorAll('.main__selection-container__grid > img');
  displaySelection();
}

// ------------------ nav bar  ---------------------- //
const categoriesButton = document.querySelector('.main__selection-container__wrapper-container__button');
const navBarItems = document.querySelectorAll('.header__nav__list__items');
var choice;

navBarItems.forEach(function(navItem) {
  navItem.addEventListener('click', function(event) {
    navBarItems.forEach(function(navItem) {
      if (navItem.classList.contains('--is-active')) {
        navItem.classList.remove('--is-active');
      }
    })
    choice = event.target.textContent;
    navItem.classList.add('--is-active');
    if (choice === 'Home') {
      categoriesButton.classList.remove('--hidden');
      displayWeeklySelection();
      selectedCategory.innerHTML = 'Week Selection';
    } else if (choice === 'Favorites') {
      displayFavorites();
    }
  })
})

// ------------------ display selected movie ---------------------- //

var selection = document.querySelectorAll('.main__selection-container__grid__img-container__play-sign-container');
var selectedMovie = document.querySelector('.main__selected-movie');
var categoryTitle = document.querySelector('.main__selection-container__categoryTitle');
var movieTitle = document.querySelector('.main__selected-movie__movieTitle');
var category = document.querySelector('.main__selected-movie__description-ctn__category');
var author = document.querySelector('.main__selected-movie__description-ctn__author');
var resume = document.querySelector('.main__selected-movie__description-ctn__resume');
var backButton = document.querySelector('.main__selected-movie__button');
var video = document.querySelector('.main__selected-movie__video');
var element;

function displaySelection() {
  selection.forEach(function(movie) {
    movie.addEventListener('click', function(event) {
      element = this.previousSibling;
      var src = element.getAttribute('src');
      data.films.forEach(function(movie) {
        if (movie.img === src) {
          video.setAttribute('src', `videos/${movie.src}`);
          movieTitle.innerHTML = movie.title;
          category.innerHTML = `Category : ${movie.category}`;
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

// ------------------ back to selection page button ---------------------- //

backButton.addEventListener('click', function() {
  selectionContainer.classList.remove('--hidden');
  selectedMovie.classList.remove('--visible');
  video.pause();
})

// ------------------ nav bar profile dropdown menu ---------------------- //

var profileIcon = document.querySelector('.header__profile-container__img');
var dropdownMenu = document.querySelector('.header__dropdown-list');
var footer = document.querySelector('.footer');
window.ev = false;

profileIcon.addEventListener('click', function(event) {
  dropdownMenu.classList.toggle('--visible');
  var width = window.innerWidth;
  if (width < 481) {
    selectionContainer.classList.toggle('--hidden');
    footer.classList.toggle('--hidden');
  }
  dropdownMenu.addEventListener('mouseleave', function(event){
    window.ev = true;
    if (window.ev) {
      dropdownMenu.classList.remove('--visible');
    }
  })
});

//-------------------CATEGORIES----------------------//

const dropdownList = document.querySelector('.main__selection-container__wrapper-container__dropdown-list')
const categories = document.querySelectorAll('.--category');
var selectedCategory = document.querySelector('.main__selection-container__wrapper-container__wrapper');

categoriesButton.addEventListener('click', function(event) {
  dropdownList.classList.toggle('--visible');
})

categories.forEach(function(category) {
  category.addEventListener('click', function(event) {
    dropdownList.classList.remove('--visible');
    var movies = '';
    category = event.target.textContent;
    if (category === 'Weekly Selection') {
      data.films.forEach(function(movie) {
        if (movie.weekMovie) {
          movies += "<div class=main__selection-container__grid__img-container><img class=main__selection-container__grid__img-container__img src=" + movie.img + "><div class=main__selection-container__grid__img-container__play-sign-container><img class=main__selection-container__grid__img-container__play-sign-container__play-sign src=img/play-sign-white.png></div><p class=main__selection-container__grid__title>" + movie.title + "</p></div>";
        }
      })
    } else if (category === 'All movies') {
      data.films.forEach(function(movie) {
        movies += "<div class=main__selection-container__grid__img-container><img class=main__selection-container__grid__img-container__img src=" + movie.img + "><div class=main__selection-container__grid__img-container__play-sign-container><img class=main__selection-container__grid__img-container__play-sign-container__play-sign src=img/play-sign-white.png></div><p class=main__selection-container__grid__title>" + movie.title + "</p></div>";
      })
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
    selectedCategory.innerHTML = category;
    grid.innerHTML = movies;
    selection = document.querySelectorAll('.main__selection-container__grid__img-container__play-sign-container');
    displaySelection();
  })
})
