const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const openSong = document.getElementById("openSong");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

function playSong() {
  audio.play().then(() => {
    playBtn.textContent = "Ⅱ";
    openSong.innerHTML = "<span>♡</span> Our song is playing";
  }).catch(() => {
    openSong.innerHTML = "<span>♡</span> Put song.mp3 in this folder first";
  });
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶";
  openSong.innerHTML = "<span>♡</span> Click here to play our song";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

openSong.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

backBtn.addEventListener("click", () => {
  audio.currentTime = 0;
  playSong();
});

nextBtn.addEventListener("click", () => {
  audio.currentTime = 0;
  playSong();
});

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
  currentTime.textContent = formatTime(audio.currentTime);
});

progress.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

audio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
  openSong.innerHTML = "<span>♡</span> Click here to play our song";
  progress.value = 0;
});

audio.volume = 0.8;
