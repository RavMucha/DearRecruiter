var count = 0;
var cards = document.getElementsByClassName("card");
var dots = document.getElementsByClassName("dots");
gsap.from("#logo", { duration: 1, y: 100, rotationX: 180 });
gsap.to("#logo", { duration: 1, y: 0, rotationX: 0 });
gsap.from("#p1", { duration: 1.2, y: 100 });
gsap.to("#p1", { duration: 1.2, y: 0 });
gsap.from("#p2", { duration: 1.4, y: 100 });
gsap.to("#p2", { duration: 1.4, y: 0 });
gsap.from("#p3", { duration: 1.6, y: 100 });
gsap.to("#p3", { duration: 1.6, y: 0 });

document.getElementById("prev").classList.add("inactive");

function next() {
  if (count < 5) {
    count++;
  }
  if (count == 5) {
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
  if ((count, 5)) {
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
}

function redir() {
  window.location.href = "https://rafal-mucha.pl";
}
