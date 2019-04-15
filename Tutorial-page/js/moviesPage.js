var localStorage = window.localStorage;

window.onload = function() {
  console.log('ASEUDFAHSHAS');
  var mood = localStorage.getItem('mood');
  var genre = localStorage.getItem('genre');
  var era = localStorage.getItem('era');

  var moviesContainer = document.getElementById('movieList');
  var stringifiedMovies = localStorage.getItem('movies');
  var movies = JSON.parse(stringifiedMovies);
  var moviesLength = movies.length;

  var filteredMovies = [];
  for (var i = 0; i < moviesLength; i++) {
    var movie = movies[i];
    var isRightGenre = movie.genre === genre;
    var isRightMood = movie.mood === mood;
    var isRightEra = movie.era === era;
    if (isRightGenre && isRightMood && isRightEra) {
      filteredMovies.push(movie);
    }
  }

  for (var i = 0; i < filteredMovies.length; i++) {
    var movie = filteredMovies[i];
    var id = 'movie-' + movie.number;
    var movieContainer = document.createElement('div');
    movieContainer.setAttribute('class', 'movie');

    var title = document.createElement('h2');
    title.setAttribute('class', 'title');
    title.innerHTML = movie.title;
    movieContainer.appendChild(title);

    var img = document.createElement('img');
    img.setAttribute('src', movie.url);
    img.setAttribute('class', 'movie-image');
    movieContainer.appendChild(img);

    var description = document.createElement('p');
    description.setAttribute('class', 'description');
    description.innerHTML = movie.description;
    movieContainer.appendChild(description);

    var form = document.createElement('form');
    form.setAttribute('action', 'Tutorial.html');
    form.setAttribute('method', 'get');
    form.setAttribute('target', '_blank');

    var button = document.createElement('button');
    button.setAttribute('class', 'moviebutt');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Read More';
    button.addEventListener('click', () => {
      localStorage.setItem('currentMovieTitle', movie.title);
    });

    form.appendChild(button);

    movieContainer.appendChild(form);

    document.getElementById('movieList').appendChild(movieContainer);
  }
}