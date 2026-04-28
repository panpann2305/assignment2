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

//top bar animation
const track = document.getElementById("topbar");
const text = document.getElementById("text");

const original = text.innerHTML;

while (track.scrollWidth < window.innerWidth * 2) {
  track.innerHTML += `<span>${original}</span>`;
}

let x = 0;

function animate() {
  x -= 1.5;

  track.style.transform = `translateX(${x}px)`;

  if (Math.abs(x) >= track.scrollWidth / 2) {
    x = 0;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


