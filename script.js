const player = document.querySelector ("body")
const video = document.querySelector("#custom-video-player");
const image = document.querySelector("#image")
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const progressBarHandle = document.querySelector ("#progress-bar-handle")
const progressBarCont = document.querySelector (".progress-bar")
const track1btn = document.querySelector ("#track1btn")
const track2btn = document.querySelector ("#track2btn")
const track3btn = document.querySelector ("#track3btn")
const track4btn = document.querySelector ("#track4btn")

//tracks//
track1btn.addEventListener("click", (e) => {
  currentTrack = 0;
  loadTrack(currentTrack);
});

track2btn.addEventListener("click", (e) => {
  currentTrack = 1;
  loadTrack(currentTrack);
});

track3btn.addEventListener("click", (e) => {
  currentTrack = 2;
  loadTrack(currentTrack);
});

track4btn.addEventListener("click", (e) => {
  currentTrack = 3;
  loadTrack(currentTrack);
});

const tracks = [
  { //since i didn't give the information of the current track in the navigation panel,
  // I decided to make an animated top bar that shows which track is currently playing. I think this is a better way to show the status and also it matchs with the website's vibe.//
    bartext: "dOOM: TRACK 1 IS PLAYING • dOOM: TRACK 1 IS PLAYING • dOOM: TRACK 1 IS PLAYING • dOOM: TRACK 1 IS PLAYING • dOOM: TRACK 1 IS PLAYING • dOOM: TRACK 1 IS PLAYING • dOOM: TRACK 1 IS PLAYING • dOOM: TRACK 1 IS PLAYING • dOOM: TRACK 1 IS PLAYING • dOOM: TRACK 1 IS PLAYING •&nbsp",
    video: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    background: "doompink.PNG",
  // The backgrounds are created differently base on the video vibes, patterns and colors. I think this will create an unique format and also feeling for each track.//
  },
  {
    bartext: "dOOM: TRACK 2 IS PLAYING • dOOM: TRACK 2 IS PLAYING • dOOM: TRACK 2 IS PLAYING • dOOM: TRACK 2 IS PLAYING • dOOM: TRACK 2 IS PLAYING • dOOM: TRACK 2 IS PLAYING • dOOM: TRACK 2 IS PLAYING • dOOM: TRACK 2 IS PLAYING • dOOM: TRACK 2 IS PLAYING • dOOM: TRACK 2 IS PLAYING •&nbsp",
    video: "https://archive.org/download/doomblue/doomblue.mp4",
    background: "doomblue.PNG",
  },
  {
    bartext: "dOOM: TRACK 3 IS PLAYING • dOOM: TRACK 3 IS PLAYING • dOOM: TRACK 3 IS PLAYING • dOOM: TRACK 3 IS PLAYING • dOOM: TRACK 3 IS PLAYING • dOOM: TRACK 3 IS PLAYING • dOOM: TRACK 3 IS PLAYING • dOOM: TRACK 3 IS PLAYING • dOOM: TRACK 3 IS PLAYING • dOOM: TRACK 3 IS PLAYING •&nbsp",
    video: "https://archive.org/download/doomyellow/doomyellow.mp4",
    background: "doomyellow.PNG",
  },
  {
    bartext: "dOOM: TRACK 4 IS PLAYING • dOOM: TRACK 4 IS PLAYING • dOOM: TRACK 4 IS PLAYING • dOOM: TRACK 4 IS PLAYING • dOOM: TRACK 4 IS PLAYING • dOOM: TRACK 4 IS PLAYING • dOOM: TRACK 4 IS PLAYING • dOOM: TRACK 4 IS PLAYING • dOOM: TRACK 4 IS PLAYING • dOOM: TRACK 4 IS PLAYING •&nbsp",
    video: "https://archive.org/download/doomgreen/doomgreen.mp4",
    background: "doomgreen.PNG",
  }
];

let currentTrack = 0;
let mode = "loop";

const bartext = document.querySelector("#texttopbar");
const background = document.querySelector(".background");

//(I used ChatGPT to help me with this part and fix the needed details)//
function loadTrack(index) {

  const track = tracks[index];

  bartext.textContent = track.bartext; //take the bartext element//

  video.src = track.video; //take the video element//

  background.style.backgroundImage =
    `url(${track.background})`; //take the background element//

  video.play();
}

document.querySelector("#nextsong")
.addEventListener("click", () => { //click the next song button//

  currentTrack++; //change to the next track//

  if(currentTrack >= tracks.length){
    currentTrack = 0;
  } //there are 4 track (0,1,2,3), but there are no track no4, so after track 3 it will return to the first track (track 0)//

  loadTrack(currentTrack); //load the current track//
});

document.querySelector("#presong")
.addEventListener("click", () => {

  currentTrack--; //change to the previous track//

  if(currentTrack < 0){
    currentTrack = tracks.length - 1;
  } //since the first track is 0, it can't be currentTrack-1, so it needs to be tracks.length (4) - 1, which will change to track 4 (3) when click the "presong" button at track 1 (0)//

  loadTrack(currentTrack); //load the current track//
});

//video//
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

//progressbar//
function updateProgressBar() {
  const value =
    Math.max(
      0,
      Math.min(
        100,
        (video.currentTime / video.duration) * 100
      )
    );
  progressBar.style.width = value + "%"; //change the duratin to %//
  progressBarHandle.style.left = value + "%";
}

let isDragging = false; //the start status always be no dragging to prevent of the unpurpose dragging when move mouse)
progressBarCont.addEventListener ("mousedown", () => {
  isDragging = true; //mousedown => can drag//
})
document.addEventListener ("mouseup", () => {
  isDragging = false; //mouseup => can't drag//
})

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return; //when mouse is moving but don't dragging anything then nothing will happen (prevent of the unpurpose dragging when move mouse)//

//(I used ChatGPT to help me with this part and fix the needed details)//
  const rect = progressBarCont.getBoundingClientRect();
  const x = e.clientX - rect.left; //x is the time position on the bar, e.clientX is the mouse position on screen, rect.left is the start point of the bar//
  const percent = Math.max(0, Math.min(1, x / rect.width));
//the handle can only move from between 0 (start point) and 1 (end point), so x/rec.width value will be between 0 and 1, and be change to %//
  video.currentTime = percent * video.duration; //change video duration//
});


//top bar animation// //(I used ChatGPT to help me with this part and fix the needed details)//
{
const track1 = document.getElementById("topbar"); //take the container that have the text//
const text1 = document.getElementById("texttopbar"); //the text//

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
  } //when x finish half round, x reset to the start point and loop again//

  requestAnimationFrame(animate1);
}
}

animate1 ()


//fullscreen//
const fullscreenButton = document.getElementById("fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

//swapmode//
const swapButton = document.getElementById ("swap-button");
console.log(swapButton, video, image);

let isVideoMode = true; //the video will be visible at first, not the image//

swapButton.onclick = () => {
  isVideoMode = !isVideoMode;

  if (isVideoMode) {
    video.style.display = "block"; //if the video is visible//
    image.style.display = "none"; //then none image//
  } else {
    video.style.display = "none"; //and the opposite//
    image.style.display = "block";
  }
};

//loop//
const loopButton = document.getElementById("loop-button");
const loopImage = document.getElementById("loop-img");
console.log(loopButton, loopImage);

let isLooping = false; //no loop at first//

loopButton.onclick = () => {
  isLooping = !isLooping;

  // The button will change color when clicked, shows that it is currently be activate//
  if (isLooping) {
    isShuffle = false; //so the 2 modes will work indepently, not be error//
    loopImage.src = "icons8-loop-on-30.png"; 
  } else {
    loopImage.src = "icons8-loop-off-30.png";
  }
};

//shuffle//
const shuffleButton = document.getElementById("shuffle-button");
const shuffleImage = document.getElementById("shuffle-img");
console.log(shuffleButton, shuffleImage);

let isShuffle = false; //no shuffle at first//

shuffleButton.onclick = () => {
  isShuffle = !isShuffle;

  // The button will change color when clicked, shows that it is currently be activate//
  if (isShuffle) {
    isLooping = false; //so the 2 modes will work indepently, not be error//
    shuffleImage.src = "icons8-shuffle-on-30.png";
  } else {
    shuffleImage.src = "icons8-shuffle-off-30.png";
  }
};

//3 different modes will happen (base on the actions) when the one track end//
video.addEventListener("ended", () => {

  if (isLooping) {
    video.currentTime = 0;
    video.play();
    return; //after that track end, it will return to 0 (start point)//
  }
//(I used ChatGPT to help me with this part and fix the needed details)//
  if (isShuffle) {
    currentTrack = Math.floor(Math.random() * tracks.length);
    loadTrack(currentTrack);
    return;
  }

  currentTrack++; //if not in loop or shuffle mode, it will automatically move to the next track//

  if (currentTrack >= tracks.length) {
    currentTrack = 0; //the track will always start at the start point//
  }
  loadTrack(currentTrack);
});

  loadTrack(currentTrack);

  //bottom bar animation// //(I used ChatGPT to help me with this part and fix the needed details)//
{
const track2 = document.getElementById("bottombar"); //take the container that have the text//
const text2 = document.getElementById("textbottombar"); //the text//

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

//For the bottom bar, i use the same kind of animation as the top bar but reverse the direction. This create a same aesthetic but still depently provide information so the users won't get confused.
//The words inside the bottom bar are the adj that describe the vibe of this music album.