var localStorage = window.localStorage;

window.onload = function() {
  // Getting the filters from local storage
  var mood = localStorage.getItem('mood');
  var genre = localStorage.getItem('genre');
  var era = localStorage.getItem('era');

  // Getting all movies from local storage
  var stringifiedMovies = localStorage.getItem('movies');
  var movies = JSON.parse(stringifiedMovies);

  // Creating array with filtered movies
  var filteredMovies = [];
  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    // Checking movie attributes
    if (movie.genre === genre && movie.mood === mood && movie.era === era) {
      filteredMovies.push(movie);
    }
  }

  // looping through the filtered movies and displaying on the page
  for (var i = 0; i < filteredMovies.length; i++) {
    var movie = filteredMovies[i];

    // Creating container for movie
    var movieContainer = document.createElement('div');
    movieContainer.setAttribute('class', 'movie');

    // Add title element to container
    var title = document.createElement('h2');
    title.setAttribute('class', 'title');
    title.innerHTML = movie.title;
    movieContainer.appendChild(title);

    // Add image element to container
    var img = document.createElement('img');
    img.setAttribute('src', movie.url);
    img.setAttribute('class', 'movie-image');
    movieContainer.appendChild(img);

    // Add description element to container
    var description = document.createElement('p');
    description.setAttribute('class', 'description');
    description.innerHTML = movie.description;
    movieContainer.appendChild(description);

    // Add form element to container
    var form = document.createElement('form');
    form.setAttribute('action', 'Tutorial.html');
    form.setAttribute('method', 'get');
    form.setAttribute('target', '_self');

    // Add button element to container
    var button = document.createElement('button');
    button.setAttribute('class', 'moviebutt');
    button.setAttribute('id', movie.title);
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Read More';

    // Prevent document timing from preselecting the first movie
    function setListener1(title) {
      return function() {
        localStorage.setItem('currentMovieTitle', title);
      };  
    }
    button.addEventListener('click', setListener1(movie.title));
    form.appendChild(button);

    movieContainer.appendChild(form);

    document.getElementById('movieList').appendChild(movieContainer);
  }
}