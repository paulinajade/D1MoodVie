var moods = ['Happy', 'Sad', 'Brave', 'Loving'];
var genres = ['Comedy', 'Horror/Thriller', 'Romance', 'Drama'];
var eras = ['Before 2000s', 'After 2000s'];

var localStorage = window.localStorage;
localStorage.setItem('movies', JSON.stringify([
  {
    "title":"mcgroober",
    "url":"https://images-na.ssl-images-amazon.com/images/I/51FH7IeNxaL._SY445_.jpg",
    "description":"mcgroober vs the world gg",
    "genre":"Comedy",
    "mood":"Happy",
    "era":"Before 2000s",
    "longDescription": "Former special operative MacGruber  is called back into action to take down his arch-enemy, Dieter Von Cunth, who's in possession of a nuclear warhead and bent on destroying Washington, D.C."
  },

  {
    "title": "Superbad",
    "url": "img/superbad.png",
    "description": "McLovin",
    "genre": "Comedy",
    "mood": "Happy",
    "era": "After 2000s",
    "longDescription": "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry."
  },

  {
    "title": "ScoobyDoo",
    "url": "https://is4-ssl.mzstatic.com/image/thumb/Video/v4/1a/d0/e1/1ad0e1d8-d727-8007-0b33-ee2f2c14b9b5/mzl.vmxbdybi.lsr/268x0w.png",
    "description": "Shaggy",
    "genre": "Comedy",
    "mood": "Happy",
    "era": "After 2000s"
  },

  {
    "title": "Harold & Kumar",
    "url": "https://m.media-amazon.com/images/M/MV5BMDc2M2I5MDQtNzliMS00ZmFjLWJmNzEtMTQwYTkxOWI4YzJlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "description": "White Castle",
    "genre": "Comedy",
    "mood": "Happy",
    "era": "After 2000s"
  },

  {
    "title": "Titanic",
    "url": "https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png",
    "description": "Leo De Caprio",
    "genre": "Romance",
    "mood": "Loving",
    "era": "After 2000s"
  },

  {
    "title": "Crazy stupid love",
    "url": "https://images-na.ssl-images-amazon.com/images/I/71kzh03v6sL._SY445_.jpg",
    "description": "Best Romance ever",
    "genre": "Romance",
    "mood": "Loving",
    "era": "After 2000s"
  },

  {
    "title": "The NoteBook",
    "url": "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg",
    "description": "Best Romance ever",
    "genre": "Romance",
    "mood": "Loving",
    "era": "After 2000s"
  },

  {
    "title": "La La Land",
    "url": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "Ryan Gosling",
    "genre": "Drama",
    "mood": "Loving",
    "era": "After 2000s"
  },

  {
    "title": "Insidious",
    "url": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Insidious_poster.jpg/220px-Insidious_poster.jpg",
    "description": "Spooky Booky",
    "genre": "Horror",
    "mood": "Brave",
    "era": "After 2000s"
  },

  {
    "title": "Friday The 13th",
    "url": "https://images.g2a.com/newlayout/323x433/1x1x0/e99d0adb9994/593138645bafe369e3079412",
    "description": "AHHHHHHHHHHHHHHHH! dont't watch alone",
    "genre": "Horror/Thriller",
    "mood": "Brave",
    "era": "Before 2000s"
  },

  {
    "title": "Chucky",
    "url": "https://images.g2a.com/newlayout/323x433/1x1x0/e99d0adb9994/593138645bafe369e3079412",
    "description": "Creepy little doll man murders everyone",
    "genre": "Horror/Thriller",
    "mood": "Brave",
    "era": "Before 2000s"
  },

  {
    "title": "Blue Valentine",
    "url": "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Blue_Valentine_film.jpg/220px-Blue_Valentine_film.jpg",
    "description": "The saddest story you will ever watch",
    "genre": "Drama",
    "mood": "Sad",
    "era": "After 2000s"
  },
  {
    "title": "The Persuit of Happyness",
    "url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Poster-pursuithappyness.jpg/220px-Poster-pursuithappyness.jpg",
    "description": "Will Smiths best preformance",
    "genre": "Drama",
    "mood": "Sad",
    "era": "After 2000s"
  },
  {
    "title": "Scary movie 1",
    "url": "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Movie_poster_for_%22Scary_Movie%22.jpg/220px-Movie_poster_for_%22Scary_Movie%22.jpg",
    "description": "The funniest scary movie",
    "genre": "Horror/Thriller",
    "mood": "Happy",
    "era": "After 2000s"
  },

  {
    "title": "A Haunted House",
    "url": "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Movie_poster_for_%22Scary_Movie%22.jpg/220px-Movie_poster_for_%22Scary_Movie%22.jpg",
    "description": "A Haunted House is a 2013 American found footage parody comedy horror",
    "genre": "Horror/Thriller",
    "mood": "Happy",
    "era": "After 2000s"
  },
  {
    "title": "Crimson Peak",
    "url": "https://resizing.flixster.com/QXJaq2yh_cMXDqAANOYMCYzdY_g=/206x305/v1.bTsxMTE5MDAyMztqOzE4MDg0OzEyMDA7Mzc5OzYwMA",
    "description": "Crimson Peak is a 2015 American gothic romance",
    "genre": "Horror/Thriller",
    "mood": "Happy",
    "era": "After 2000s"
  },
  {
    "title": "Life is Beautiful",
    "url": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Vitaebella.jpg/220px-Vitaebella.jpg",
    "description": "Life Is Beautiful is a 1997 Italian tragicomedy film",
    "genre": "Comedy",
    "mood": "Sad",
    "era": "Before 2000s"
  },
  {
    "title": "Edward Scissorhands",
    "url": "https://images-na.ssl-images-amazon.com/images/I/511JEPNGDNL._SY445_.jpg",
    "description": "An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life.",
    "genre": "Comedy",
    "mood": "Sad",
    "era": "Before 2000s"
  },
  {
    "title": "The Intouchables",
    "url": "https://upload.wikimedia.org/wikipedia/en/9/93/The_Intouchables.jpg",
    "description": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    "genre": "Comedy",
    "mood": "Sad",
    "era": "After 2000s"
  },
  {
    "title": "The Night of the Hunter",
    "url": "https://upload.wikimedia.org/wikipedia/en/c/ca/Nightofthehunterposter.jpg",
    "description": "The Night of the Hunter is a 1955 American thriller",
    "genre": "Horror/Thriller",
    "mood": "Loving",
    "era": "Before 2000s"
  },
  {
    "title": "A Nightmare on Elm Street",
    "url": "https://m.media-amazon.com/images/M/MV5BODIxMTQ0NTIxM15BMl5BanBnXkFtZTcwMzY1NDAyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "description": "A Nightmare on Elm Street is a 1984 American supernatural slasher film",
    "genre": "Horror/Thriller",
    "mood": "Loving",
    "era": "Before 2000s"
  },
  {
    "title": "Love Affair",
    "url": "https://upload.wikimedia.org/wikipedia/en/2/27/Love_Affair.jpg",
    "description": "Love Affair is a 1939 American romantic film starring Irene Dunne and Charles Boyer",
    "genre": "Romance",
    "mood": "Sad",
    "era": "Before 2000s"
  },
  {
    "title": "Before Sunrise",
    "url": "http://i.imgur.com/tocI1Ep.jpg",
    "description": "Before Sunrise is a 1995 American romantic drama",
    "genre": "Romance",
    "mood": "Brave",
    "era": "Before 2000s"
  },
  {
    "title": "The Thin Man",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/The_Thin_Man_1934_Poster.jpg/225px-The_Thin_Man_1934_Poster.jpg",
    "description": "The Thin Man is a 1934 American pre-Code comedy-mystery",
    "genre": "Romance",
    "mood": "Brave",
    "era": "Before 2000s"
  },
  {
    "title": "Pride & Prejudice",
    "url": "https://is1-ssl.mzstatic.com/image/thumb/Video/ea/d8/f7/mzi.rjdleiwz.jpg/268x0w.jpg",
    "description": "Pride & Prejudice is a 2005 romance film",
    "genre": "Romance",
    "mood": "Brave",
    "era": "After 2000s"
  },

  {
    "title": "The First Man",
    "url": "http://www.reelviews.net/resources/img/posters/thumbs/first_man_poster.jpg",
    "description": "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on",
    "genre": "Drama",
    "mood": "Sad",
    "era": "After 2000s"
  },
  {
    "title": "The First Man",
    "url": "http://www.reelviews.net/resources/img/posters/thumbs/first_man_poster.jpg",
    "description": "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on",
    "genre": "Drama",
    "mood": "Loving",
    "era": "After 2000s"
  },
  {
    "title": "Creed 2",
    "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Creed_II_poster.png/220px-Creed_II_poster.png",
    "description": "Creed II is a 2018 American sports drama film",
    "genre": "Drama",
    "mood": "Sad",
    "era": "After 2000s"
  },
  {
    "title": "Creed 2",
    "url": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Creed_II_poster.png/220px-Creed_II_poster.png",
    "description": "Creed II is a 2018 American sports drama film",
    "genre": "Drama",
    "mood": "Loving",
    "era": "Before 2000s"
  },
  {
    "title": "The Godfather",
    "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "description": "The Godfather is a 1972 American crime film",
    "genre": "Drama",
    "mood": "Sad",
    "era": "Before 2000s"
  },
  {
    "title": "The Godfather part 2",
    "url": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "description": "The Godfather part 2 is a 1974 American crime film",
    "genre": "Drama",
    "mood": "Sad",
    "era": "Before 2000s"
  },
  {
    "title": "The Hangover",
    "url": "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "description": "The Hangover is a 2009 American comedy film",
    "genre": "Comedy",
    "mood": "Brave",
    "era": "After 2000s"
  },
  {
    "title": "Animal House",
    "url": "https://wildezine.com/wp-content/uploads/2017/05/large_9xwMZgLNZDnRUUhiK8i3U19EJZE.jpg",
    "description": "Animal House is a 1978 American comedy film",
    "genre": "Comedy",
    "mood": "Brave",
    "era": "Before 2000s"
  },
  {
    "title": "Animal House",
    "url": "https://wildezine.com/wp-content/uploads/2017/05/large_9xwMZgLNZDnRUUhiK8i3U19EJZE.jpg",
    "description": "Animal House is a 1978 American comedy film",
    "genre": "Comedy",
    "mood": "Loving",
    "era": "Before 2000s"
  },
  {
    "title": "Deadpool",
    "url": "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/220px-Deadpool_%282016_poster%29.png",
    "description": "Deadpool is a 2016 American superhero film based on the Marvel Comics character",
    "genre": "Comedy",
    "mood": "Loving",
    "era": "After 2000s"
  },
  {
    "title": "Get Out",
    "url": "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
    "description": "Get Out is a 2017 American horror film written and directed by Jordan Peele",
    "genre": "Horror/Thriller",
    "mood": "Sad",
    "era": "After 2000s"
  },
  {
    "title": "Get Out",
    "url": "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
    "description": "Get Out is a 2017 American horror film written and directed by Jordan Peele",
    "genre": "Horror/Thriller",
    "mood": "Brave",
    "era": "After 2000s"
  },
  {
    "title": "The Silence Of The Lambs",
    "url": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
    "description": "The Silence of the Lambs is a 1991 American psychological horror-thriller",
    "genre": "Horror/Thriller",
    "mood": "Sad",
    "era": "Before 2000s"
  },
  {
    "title": "The Silence Of The Lambs",
    "url": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
    "description": "The Silence of the Lambs is a 1991 American psychological horror-thriller",
    "genre": "Horror/Thriller",
    "mood": "Brave",
    "era": "Before 2000s"
  },
  {
    "title": "Sweeny Todd",
    "url": "https://images-na.ssl-images-amazon.com/images/I/51u7CpZ1kuL._SY445_.jpg",
    "description": "Sweeney Todd: The Demon Barber of Fleet Street (also known simply as Sweeney Todd) is a 2007 British-American musical period slasher film",
    "genre": "Horror/Thriller",
    "mood": "Happy",
    "era": "After 2000s"
  },
  {
    "title": "Abbott and Costello Meet Frankenstein",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Abbott_costello_frankenstein.jpg/220px-Abbott_costello_frankenstein.jpg",
    "description": "Abbott and Costello Meet Frankenstein is a 1948 American horror comedy film",
    "genre": "Horror/Thriller",
    "mood": "Happy",
    "era": "Before 2000s"
  }

]));

window.onload = function() {
  var mood  = document.querySelector("#mood.select");
  var genre = document.querySelector("#genre.select");
  var era   = document.querySelector("#era.select");

  document.querySelector("#submitbutton").addEventListener("click", function(){
    // Set local storage with parameters
    localStorage.setItem('mood', moods[mood.value])
    localStorage.setItem('genre', genres[genre.value])
    localStorage.setItem('era', eras[era.value])
  });
}
