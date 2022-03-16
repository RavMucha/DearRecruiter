var count = 0;
var isPlaying = false;
var cards = document.getElementsByClassName("card");
var dots = document.getElementsByClassName("dots");
var questions = document.getElementsByClassName("questions");
var crab = document.getElementById("money-crab");
gsap.from("#logo", { duration: 1, y: 50, rotationX: 180 });
gsap.to("#logo", { duration: 1, y: 0, rotationX: 0 });
if (!sessionStorage.hasOwnProperty("firstCome")) {
  gsap.from("#p1", { duration: 1.2, y: 100 });
  gsap.to("#p1", { duration: 1.2, y: 0 });
  gsap.from("#p2", { duration: 1.4, y: 100 });
  gsap.to("#p2", { duration: 1.4, y: 0 });
  gsap.from("#p3", { duration: 1.6, y: 100 });
  gsap.to("#p3", { duration: 1.6, y: 0 });
  sessionStorage.setItem("firstCome", "firstServed");
}
document.getElementById("prev").classList.add("inactive");

gsap.from("#bat", { duration: 4, x: 300, y: 60 });
gsap.to("#bat", { duration: 4, x: 0, y: 0 });
gsap.to("#bat", { duration: 4, opacity: 0 });

function next() {
  if (count < cards.length - 1) {
    count++;
  }
  if (count == cards.length - 1) {
    document.getElementById("next").classList.add("inactive");
  }
  document.getElementById("prev").classList.remove("inactive");
  for (c of cards) {
    c.style.display = "none";
  }
  for (d of dots) {
    d.classList.remove("active");
  }
  document.getElementById("dot-" + count).classList.add("active");
  document.getElementsByClassName("card")[count].style.display = "block";
  gsap.from("#card_" + count, { duration: 0.5, x: -20 });
  gsap.to("#card_" + count, { duration: 0.5, x: 0 });
}

function prev() {
  if (count > 0) {
    count--;
  }
  if (count == 0) {
    document.getElementById("prev").classList.add("inactive");
  }
  if (count < cards.length - 1) {
    document.getElementById("next").classList.remove("inactive");
  }
  for (c of cards) {
    c.style.display = "none";
  }
  for (d of dots) {
    d.classList.remove("active");
  }
  document.getElementById("dot-" + count).classList.add("active");
  document.getElementsByClassName("card")[count].style.display = "block";
  gsap.from("#card_" + count, { duration: 0.5, x: 20 });
  gsap.to("#card_" + count, { duration: 0.5, x: 0 });
}

function zombie() {
  isPlaying = true;
  Tunes();
  document.getElementById("zombie").style.display = "block";
  scream.play();
  scream.volume = 1.0;
  setTimeout(() => {
    document.getElementById("zombie").style.display = "none";
    count = 0;
    for (c of cards) {
      c.style.display = "none";
    }
    for (d of dots) {
      d.classList.remove("active");
    }
    document.getElementById("dot-" + count).classList.add("active");
    document.getElementsByClassName("card")[count].style.display = "block";
  }, 1500);
  document.getElementById("next").classList.remove("inactive");
  document.getElementById("prev").classList.add("inactive");
}

function redir() {
  window.location.href = "https://rafal-mucha.pl";
}

function questionsShow(val) {
  for (q of questions) {
    q.style.display = "none";
  }
  document.getElementById("questions_" + val).style.display = "block";
  gsap.from("#questions_" + val, {
    duration: 0.5,
    scale: 0.7,
  });
  gsap.to("#questions_" + val, {
    duration: 0.5,
    ease: "back.out(1.8)",
    scale: 1,
  });
}

function Tunes() {
  isPlaying ? half_life.pause() : half_life.play();
  isPlaying
    ? (crab.src = "Assets/Money.svg")
    : (crab.src = "Assets/crab_mono.gif");
  isPlaying ? (crab.style.width = "") : (crab.style.width = "auto");
}
half_life.onplaying = function () {
  isPlaying = true;
  document.getElementById("music-btn").style.display = "none";
  document.getElementById("pause-btn").style.display = "inline-block";
};
half_life.onpause = function () {
  isPlaying = false;
  document.getElementById("music-btn").style.display = "inline-block";
  document.getElementById("pause-btn").style.display = "none";
  crab.src = "Assets/Money.svg";
  crab.style.width = "auto";
};
