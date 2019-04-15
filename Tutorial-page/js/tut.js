var localStorage = window.localStorage;

window.onload = function() {
  var stringifiedMovies = localStorage.getItem('movies');
  var movies = JSON.parse(stringifiedMovies);
  var currentMovieTitle = localStorage.getItem('currentMovieTitle');
  var currentMovie;

  for (i = 0; i < movies.length; i++) {
    var movie = movies[i];
    if (movie.title === currentMovieTitle) {
      currentMovie = movie;
      break;
    }
  }

  var currentMovieContainer = document.getElementById('currentMovieContainer');
  
  var title = document.getElementById('movietitle');
  title.innerHTML = movie.title;

  var img = document.getElementById("movie-image");
  img.setAttribute('src', movie.url);

  var description = document.getElementsByClassName('disc-header')[0];
  description.innerHTML = movie.longDescription;
}