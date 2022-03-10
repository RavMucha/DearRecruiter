var count = 0;

function next() {
  if (count > 3) {
    count = 0;
  } else {
    count++;
  }
  let cards = document.getElementsByClassName("card");
  for (c of cards) {
    c.style.display = "none";
  }
  document.getElementsByClassName("card")[count].style.display = "block";
}

function prev() {
  if (count <= 0) {
    count = 4;
  } else {
    count--;
  }
  let cards = document.getElementsByClassName("card");
  for (c of cards) {
    c.style.display = "none";
  }
  document.getElementsByClassName("card")[count].style.display = "block";
}

function zombie() {
  document.getElementById("zombie").style.display = "block";
  let scream = new Audio("./Assets/GIRLS.wav");
  scream.play();
  scream.volume = 1.0;
  setTimeout(() => {
    document.getElementById("zombie").style.display = "none";
    window.location.href = "https://rafal-mucha.pl";
  }, 1500);
}
