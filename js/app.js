var pkg = {
  mood:"",
  genre:"",
  era:"",
}

var storedPackage = localStorage.getItem("package");
if(storedPackage){
  pkg = JSON.parse(storedPackage)
} else {
  pkg = {
    mood:"Happy",
    genre:"Comedy",
    era:"Before-2000s",
  }
}

var handler = {
  set:function(obj, prop, value){
    obj[prop] = value; 
     //mood
    /*
     if (prop == "mood"){
      changeMood(val, "");
     }
    
     if(prop == "mood"){
     changeMood(val, "Sad");
     }
     if(prop == "mood"){
     changeMood(val, "Brave");
     }
     if(prop == "mood"){
     changeMood(val, "Loving");
     } 
     //pref genre
     if(prop == "genre"){
     changeGenre(val, "Comedy");
     }
     if(prop == "genre"){
     changeGenre(val, "Horror/Thriller");
     }
     if(prop == "genre"){
     changeGenre(val, "Romance");
     }
     if(prop == "genre"){
     changeGenre(val, "Drama");
     }
     // pref era
     if(prop == "era"){
       ChangeEra == (val, "Before-2000s")
     }
     if(prop == "era"){
       ChangeEra == (val, "After-2000s")
     }
     */
  }
}

var proxPkg = new Proxy(pkg, handler);

/*PAGE1 */

//Mood input
function changeMood(el){
  proxPkg.mood = el.value;
  console.log(proxPkg.mood);
  save();
}

function changeGenre(el){
  proxPkg.genre = el.value;
console.log(proxPkg.genre);
save();
}

function changeEra(el){
  proxPkg.era = el.value;
console.log(proxPkg.era);
save();
}

console.log(proxPkg)

function changePage(){
  
  location.href = "../Tutorial-page/Movies-page.html";
}

/* PAGE 2*/

function FinalPageInit(){
  
 

  //filter with pkg
// console.log(pkg)
//console.log(movies);
  var results = movies.filter(function(obj, i){
    return (obj.mood === proxPkg.mood && obj.genre === proxPkg.genre && obj.era === proxPkg.era);
  })

  for (var i = 0; i < results.length; i++) {
    var movie = results[i];

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

function save(){
  localStorage.setItem("package",JSON.stringify(proxPkg));
  
}