var localStorage = window.localStorage;

window.onload = function() {
  var myMovies = JSON.parse(localStorage.getItem('myMovies'));

  for (i = 0; i < myMovies.length; i++) {
    var movie = myMovies[i];
    var currentMovie;
    var allMovies = JSON.parse(localStorage.getItem('movies'));
    for (var j = 0; j < allMovies.length; j++) {
        var filterMovie = allMovies[j];
        console.log(movie);
        if (filterMovie.title === movie) {
            currentMovie = filterMovie;
        }
    }
    
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

    var movieButt = document.createElement('button');
    movieButt.setAttribute('class', 'moviebutt');
    movieButt.innerHTML = 'Info';
    movieCont.appendChild(movieButt);

    document.getElementsByClassName('moovie-grid')[0].appendChild(movieCont);
  }
}