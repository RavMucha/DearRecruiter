var count = 0;
var scream = new Audio("./Assets/GIRLS.wav");

function next() {
  count++;
  let cards = document.getElementsByClassName("card");
  for (c of cards) {
    c.style.display = "none";
  }
  let dots = document.getElementsByClassName("dots");
  for (d of dots) {
    d.classList.remove("active");
  }
  document.getElementById("dot-" + count).classList.add("active");
  document.getElementsByClassName("card")[count].style.display = "block";
}

function prev() {
  count--;
  let cards = document.getElementsByClassName("card");
  for (c of cards) {
    c.style.display = "none";
  }
  let dots = document.getElementsByClassName("dots");
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
    window.location.href = "https://rafal-mucha.pl";
  }, 1500);
}
