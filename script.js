const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const NextsongImg = document.querySelector("#next-song-img");
const progressBar = document.querySelector("#progress-bar-fill");

video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "icons8-pause-30.png";
  } else {
    video.pause();
    playPauseImg.src = "icons8-play-30.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// Add other functionalities here

//top bar animation (I used ChatGPT to help me and fix the needed parts)
{
const track1 = document.getElementById("topbar"); //take the container that have the text//
const text1 = document.getElementById("text1"); //the text//

const original = text1.innerHTML; //save the original text//

while (track1.scrollWidth < window.innerWidth * 3) { //when the width of the track (the text length) is 3 times smaller than the screen size//
  track1.innerHTML = `<span>${original}</span><span>${original}</span>`; //then it will double reset to make sure the content run smooth//
}
let x = 0; //x start position//

function animate1() {
  x += 1.5; //loop, run from left to right, speed 1.5 //

  track1.style.transform = `translateX(${x}px)`; //take element x to transform//

  if (x >= 0) {
    x = -track1.scrollWidth / 2;
  } //when x finish 2 round, x reset to the start point and loop again//

  requestAnimationFrame(animate1);
}
}

animate1 ()

//bottom bar animation
{
const track2 = document.getElementById("bottombar"); //take the container that have the text//
const text2 = document.getElementById("text2"); //the text//

const original = text2.innerHTML; //save the original text//

while (track2.scrollWidth < window.innerWidth * 3) { //when the width of the track (the text length) is 3 times smaller than the screen size//
  track2.innerHTML = `<span>${original}</span><span>${original}</span>`; //then it will double reset to make sure the content run smooth//
}

let y = -track2.scrollWidth / 2; //y start position//

function animate2() {
  y -= 1.5; //loop, run from right to left, speed 1.5 //

  track2.style.transform = `translateX(${y}px)`; //take element y to transform//

   if (Math.abs(y) >= track2.scrollWidth / 2) {
    y = 0;
  } //when y run to the position that is >= width of the track (the text length)/2, then y reset to the start point//

  requestAnimationFrame(animate2);
}
}

animate2 ()
