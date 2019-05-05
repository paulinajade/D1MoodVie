window.onload = function() {
  // Get 'my movies' and 'all movies' from local storage
  var myMovies = JSON.parse(localStorage.getItem('myMovies'));
  var allMovies = movies;
  // Loop through 'my movies' and display on page
  for (i = 0; i < myMovies.length; i++) {
    var movie = myMovies[i];
    var currentMovie;
    // Search for the current movie in all movies to get it's information
    for (var j = 0; j < allMovies.length; j++) {
      var filteredMovie = allMovies[j];
      if (filteredMovie.title === movie) {
        currentMovie = filteredMovie;
      }
    }
    
    // Create elements with movie information
    var movieCont = document.createElement('div');
    movieCont.setAttribute('class', 'moovie-cont');

    var movieTitle = document.createElement('h1');
    movieTitle.setAttribute('class', 'movietitle');
    movieTitle.innerHTML = currentMovie.title;
    movieCont.appendChild(movieTitle);
    
    var movieSrc = localStorage.getItem('')
    var movieImage = document.createElement('img');
    movieImage.setAttribute('class', 'movie-image');
    movieImage.setAttribute('src', currentMovie.url);
    movieCont.appendChild(movieImage);

    

    document.getElementsByClassName('moovie-grid')[0].appendChild(movieCont);
  }
}
