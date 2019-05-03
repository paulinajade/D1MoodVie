window.onload = function() {
  // Get all movies from local storage
console.log(movies);

  // Grab the current movie selected from local storage
  var currentMovieTitle = localStorage.getItem('currentMovieTitle');
  // Search through all movies to find the selected one
  var currentMovie;
  for (i = 0; i < movies.length; i++) {
    var movie = movies[i];
    if (movie.title === currentMovieTitle) {
      currentMovie = movie;
      break;
    }
  }
  
  // Build page with movie attributes
  var title = document.getElementById('movietitle');
  title.innerHTML = currentMovie.title;

  var img = document.getElementById("movie-image");
  img.setAttribute('src', currentMovie.url);

  var description = document.getElementsByClassName('disc-header')[0];
  description.innerHTML = currentMovie.longDescription;

 
  // Add listener to button that adds it to 'my movies' in local storage
  document.getElementById("add-to-movies").addEventListener('click', function() {
    // TODO: change ^selector to actually select the button rather than anywhere on the page
    var myMovies = JSON.parse(localStorage.getItem('myMovies'));
    // Double check that the 'my movies' array exists
    if (myMovies) {
      localStorage.setItem('myMovies', JSON.stringify(myMovies.concat(currentMovieTitle)));
    } else {
      localStorage.setItem('myMovies', JSON.stringify([currentMovieTitle]));
    }

    // redirect
    window.location = "My-Moovies.html";
  });
}