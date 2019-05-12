
// Clickable Input
var label1 = document.getElementsByClassName("label")
var label2 = document.getElementsByClassName("label2")
var label3 = document.getElementsByClassName("thirdlabel")

// UI BOX COLORS
var box1 = document.getElementsByClassName("box")
var box2 = document.getElementsByClassName("box2")
var box3 = document.getElementsByClassName("box3")

// box1[0].style.backgroundColor = "red"
// box2[0].style.backgroundColor = "red"
// box3[0].style.backgroundColor = "red"


var pkg = {
  mood:"",
  genre:"",
  era:"",
  bgone: "",
  bgtwo: "",
  bgthree: ""
}

var storedPackage = localStorage.getItem("package");
if(storedPackage){
  pkg = JSON.parse(storedPackage)
} else {
  pkg = {
    mood:"Happy",
    genre:"Comedy",
    era:"Before-2000s",
    bgone: "",
    bgtwo: "",
    bgthree: ""
  }
}

var handler = {
  set:function(obj, prop, value){
    obj[prop] = value; 
   
     if (value == "Happy"){
      changeBGHappy(value);
     }
     if (value == "Sad"){
      changeBGSad(value);
     }
     if (value == "Brave"){
      changeBGBrave(value);
     }
     if (value == "Loving"){
       changeBGLoving(value);
     }

     //genre 

     if (value == "Comedy"){
      changeBGComedy(value);
     }
     if (value == "Horror/Thriller"){
      changeBGHorror(value);
     }
     if (value == "Romance"){
      changeBGBRomance(value);
     }
     if (value == "Drama"){
       changeBGDrama(value);
     }

     if (value == "Before-2000s"){
       changeEra1UI(value)
     }
     if (value == "After-2000s"){
       changeEra2UI(value)
     }
    
    //  if(prop == "mood"){
    //  changeMood(val, "Sad");
    //  }
    //  if(prop == "mood"){
    //  changeMood(val, "Brave");
    //  }
    //  if(prop == "mood"){
    //  changeMood(val, "Loving");
    //  } 
    //  //pref genre
    //  if(prop == "genre"){
    //  changeGenre(val, "Comedy");
    //  }
    //  if(prop == "genre"){
    //  changeGenre(val, "Horror/Thriller");
    //  }
    //  if(prop == "genre"){
    //  changeGenre(val, "Romance");
    //  }
    //  if(prop == "genre"){
    //  changeGenre(val, "Drama");
    //  }
    //  // pref era
    //  if(prop == "era"){
    //    ChangeEra == (val, "Before-2000s")
    //  }
    //  if(prop == "era"){
    //    ChangeEra == (val, "After-2000s")
    //  }
    //  
  }
}

var proxPkg = new Proxy(pkg, handler);

/*PAGE1 */

//Mood input
function changeMood(el){
  proxPkg.mood = el.value;
  if(el.value === "Happy"){
  proxPkg.bgone = "#2b5ddb"
  } 

  if(el.value === "Sad"){
  proxPkg.bgone = "#2b5ddb"
  } 

  if(el.value === "Brave"){
  proxPkg.bgone = "#2b5ddb"
  } 
  if(el.value === "Loving"){
  proxPkg.bgone = "#2b5ddb"
  }
  console.log(proxPkg.mood);
  save();
}

//Genre Input

function changeGenre(el){
  proxPkg.genre = el.value;
  if(el.value === "Comedy"){
    proxPkg.bgtwo = "#2b5ddb"
    } 

    if(el.value === "Horror/Thriller"){
    proxPkg.bgtwo = "#2b5ddb"
    } 
  
    if(el.value === "Romance"){
    proxPkg.bgtwo = "#2b5ddb"
    } 
    if(el.value === "Drama"){
    proxPkg.bgtwo = "#2b5ddb"
    }
    console.log(proxPkg.genre);
    save();
}

// Era input

function changeEra(el){
  proxPkg.era = el.value;
  if (el.value === "Before-2000s"){
    proxPkg.bgthree = "#2b5ddb"
  }
  if (el.value === "After-2000s"){
    proxPkg.bgthree = "#2b5ddb"
  }
  
console.log(proxPkg.era);
save();
}

//UI changes

function changeBGHappy(val){
  box1[0].style.backgroundColor = proxPkg.bgone
  box1[1].style.backgroundColor = ""
  box1[2].style.backgroundColor = ""
  box1[3].style.backgroundColor = ""
  
}
function changeBGSad(val){
  box1[1].style.backgroundColor = proxPkg.bgone
  box1[0].style.backgroundColor = ""
  box1[2].style.backgroundColor = ""
  box1[3].style.backgroundColor = ""

}
function changeBGBrave(val){
  box1[2].style.backgroundColor = proxPkg.bgone
  box1[1].style.backgroundColor = ""
  box1[0].style.backgroundColor = ""
  box1[3].style.backgroundColor = ""
}
function changeBGLoving(val){
  box1[3].style.backgroundColor = proxPkg.bgone
  box1[2].style.backgroundColor = ""
  box1[1].style.backgroundColor = ""
  box1[0].style.backgroundColor = ""
}

// genre bg

function changeBGComedy(val){
  box2[0].style.backgroundColor = proxPkg.bgtwo
  box2[1].style.backgroundColor = ""
  box2[2].style.backgroundColor = ""
  box2[3].style.backgroundColor = ""
  
}
function changeBGHorror(val){
  box2[1].style.backgroundColor = proxPkg.bgtwo
  box2[0].style.backgroundColor = ""
  box2[2].style.backgroundColor = ""
  box2[3].style.backgroundColor = ""

}
function changeBGBRomance(val){
  box2[2].style.backgroundColor = proxPkg.bgtwo
  box2[1].style.backgroundColor = ""
  box2[0].style.backgroundColor = ""
  box2[3].style.backgroundColor = ""
}
function changeBGDrama(val){
  box2[3].style.backgroundColor = proxPkg.bgtwo
  box2[2].style.backgroundColor = ""
  box2[1].style.backgroundColor = ""
  box2[0].style.backgroundColor = ""
}

// Era bg 

function changeEra1UI(){
  box3[0].style.backgroundColor = proxPkg.bgthree;
  box3[1].style.backgroundColor = "";
}
function changeEra2UI(){
  box3[1].style.backgroundColor = proxPkg.bgthree;
  box3[0].style.backgroundColor = "";
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

function goBack() {
  window.history.back();
}

function save(){
  localStorage.setItem("package",JSON.stringify(proxPkg));
  
}

