const slideOneMarker = document.getElementById("slideOneMarker"),
  slideTwoMarker = document.getElementById("slideTwoMarker"),
  slideThreeMarker = document.getElementById("slideThreeMarker"),
  slideFourMarker = document.getElementById("slideFourMarker"),
  pause = document.getElementById("pause"),
  back = document.getElementById("back"),
  next = document.getElementById("next");


let i = -1,
  images = ["images/image1.png", "images/image2.png", "images/image3.png", "images/image4.png"],
  speed = 3000,
  moving = true,
  colorBlue = '#304179',
  timer = speed;

function colorMarkers(i) { //set all the dots to white.
  slideOneMarker.style.backgroundColor = "white";
  slideTwoMarker.style.backgroundColor = "white";
  slideThreeMarker.style.backgroundColor = "white";
  slideFourMarker.style.backgroundColor = "white";

  switch (i) { //Find the appropriate marker and change to blue.
    case 0:
      slideOneMarker.style.backgroundColor = colorBlue;
      break;
    case 1:
      slideTwoMarker.style.backgroundColor = colorBlue;
      break;
    case 2:
      slideThreeMarker.style.backgroundColor = colorBlue;
      break;
    case 3:
      slideFourMarker.style.backgroundColor = colorBlue;
      break;
  }
  document.eachImage.src = images[i];
}

const moveImage = () => {
  if (moving) { //if moving is set to true;
    i < images.length - 1 ? i++ : i = 0;
    timer = setTimeout("moveImage()", speed); //set the timeout speed.
    colorMarkers(i); //change the image and markers.
  } else {
    clearTimeout(timer); //Clear the timeout to stop sides speeding up when hitting play pause repetitively.
  }
}
window.onload = moveImage();

const inScope = (val) => { //keep i in scope, so it doesn't look for a number outside of the array.
  switch (val) {
    case -1:
      val = 3;
      break; //it's -1, go to 3.
    case 4:
      val = 0;
      break; //It's 4, go to 0.
    default:
      break; //keep it as it should.
  }
  return val;
}


const pauseButton = () => {
  pause.innerText = 'Play'; //set the text to play.
  moving = false; //set the toggle to not moving
  moveImage(); //call moveImage
}


const playButton = () => {
  pause.innerText = 'Pause'; //set the button text to pause.
  moving = true; //initiate moving.
  moveImage(); //move the image.
}


pause.addEventListener('click', () => { //toggle between play and pause function.
  moving ? pauseButton() : playButton();
});


back.addEventListener('click', () => {
  var val = i - 1; //find the value of i and decrease by one.
  i = inScope(val); //check if the value is in scope.
  colorMarkers(i); //update the markers and image.
});


next.addEventListener('click', () => {
  var val = i + 1; //find the value of i and increase by 1.
  i = inScope(val); //check if it is inscope or not.
  colorMarkers(i); //update the markers and image.
});


document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      var val = i - 1;
      i = inScope(val);
      colorMarkers(i);
      break;
    case 39:
      var val = i + 1;
      i = inScope(val);
      colorMarkers(i);
      break;
    case 0: //spacebar in mozilla.
      moving ? pauseButton() : playButton();
      break;
    case 32: //spacebar on most browsers.
      moving ? pauseButton() : playButton();
      break;
  }
}
