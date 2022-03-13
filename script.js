var count = 0;
var cards = document.getElementsByClassName("card");
var dots = document.getElementsByClassName("dots");
gsap.from("#logo", { duration: 1, x: 100 });
gsap.to("#logo", { duration: 1, x: 0 });
gsap.from("#p1", { duration: 2, x: 100 });
gsap.to("#p1", { duration: 2, x: 0 });
gsap.from("#p2", { duration: 3, x: 100 });
gsap.to("#p2", { duration: 3, x: 0 });
gsap.from("#p3", { duration: 4, x: 100 });
gsap.to("#p3", { duration: 4, x: 0 });
function next() {
  count++;
  for (c of cards) {
    c.style.display = "none";
  }
  for (d of dots) {
    d.classList.remove("active");
  }
  document.getElementById("dot-" + count).classList.add("active");
  document.getElementsByClassName("card")[count].style.display = "block";
}

function prev() {
  count--;
  for (c of cards) {
    c.style.display = "none";
  }
  for (d of dots) {
    d.classList.remove("active");
  }
  document.getElementById("dot-" + count).classList.add("active");
  document.getElementsByClassName("card")[count].style.display = "block";
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
