var moods = ['Happy', 'Sad', 'Brave', 'Loving'];
var genres = ['Comedy', 'Horror/Thriller', 'Romance', 'Drama'];
var eras = ['Before 2000s', 'After 2000s'];

var localStorage = window.localStorage;
localStorage.setItem('movies', JSON.stringify([
  {
    "number": 1,
    "title":"mcgroober",
    "url":"https://img.cinemablend.com/filter:scale/quill/3/3/c/a/6/5/33ca65a4ba55aa8d5285165f292bd08777dffd27.jpg?mw=600",
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
]));

window.onload = function() {
  var mood  = document.querySelector("#mood.select");
  var genre = document.querySelector("#genre.select");
  var era   = document.querySelector("#era.select");

  document.querySelector("#submitbutton").addEventListener("click", function(){
    // set storage with params
    localStorage.setItem('mood', moods[mood.value])
    localStorage.setItem('genre', genres[genre.value])
    localStorage.setItem('era', eras[era.value])
    // redirect
  });
}

//PROXY SETUP

//CHANGE STATE FUNCTIONS

//CHANGE UI FUNCTIONS