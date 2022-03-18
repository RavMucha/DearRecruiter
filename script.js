var count = 0;
var isPlaying = false;
var cards = document.getElementsByClassName("card");
var dots = document.getElementsByClassName("dots");
var questions = document.getElementsByClassName("questions");
var money = document.getElementById("money-crab");
var crab = document.getElementById("crab-money");
gsap.fromTo(
  "#logo",
  { y: 50, rotationX: 75 },
  { duration: 2, y: 0, rotationX: 0 }
);
if (!sessionStorage.hasOwnProperty("firstCome")) {
  gsap.fromTo("#p1", { y: 100 }, { duration: 1.2, y: 0 });
  gsap.fromTo("#p2", { y: 100 }, { duration: 1.4, y: 0 });
  gsap.fromTo("#p3", { y: 100 }, { duration: 1.6, y: 0 });
  sessionStorage.setItem("firstCome", "firstServed");
}
document.getElementById("prev").classList.add("inactive");

gsap.fromTo(
  "#bat",
  { x: 300, y: 60, opacity: 1, rotation: -30 },
  {
    duration: 4,
    x: 0,
    y: 0,
    opacity: 0,
    rotation: 0,
    onComplete() {
      gsap.fromTo(
        "#bat",
        { x: 250, y: 50, opacity: 1, rotation: 0 },
        {
          duration: 3,
          x: 150,
          y: 0,
          opacity: 0,
          rotation: -15,
          onComplete() {
            gsap.fromTo(
              "#bat",
              { x: 200, y: 100, opacity: 1, rotation: 20 },
              {
                duration: 2,
                x: 0,
                y: 0,
                opacity: 0,
                rotation: 0,
                onComplete() {
                  gsap.fromTo(
                    "#bat",
                    { x: 100, y: 100, opacity: 1, rotation: 60 },
                    {
                      duration: 2,
                      x: 200,
                      y: 0,
                      opacity: 0,
                      rotation: 70,
                    }
                  );
                },
              }
            );
          },
        }
      );
    },
  }
);
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
  gsap.fromTo("#card_" + count, { x: -20 }, { duration: 0.5, x: 0 });
  document.getElementById("card-container").scrollIntoView();
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
  gsap.fromTo("#card_" + count, { x: 20 }, { duration: 0.5, x: 0 });
  document.getElementById("card-container").scrollIntoView();
}

function zombie() {
  isPlaying = false;
  half_life.pause();
  crab.style.display = "none";
  money.style.display = "inline-block";
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
  gsap.fromTo(
    "#questions_" + val,
    {
      scale: 0.5,
    },
    {
      duration: 0.5,
      ease: "back.out(1.8)",
      scale: 1,
    }
  );
}

function Tunes() {
  isPlaying ? half_life.pause() : (half_life.play(), (half_life.volume = 0.2));
  if (!isPlaying) {
    gsap.fromTo(
      "#money-crab",
      {
        scale: 1,
      },
      {
        duration: 0.2,
        ease: "power1.out",
        scale: 0,
        onComplete() {
          money.style.display = "none";
          gsap.fromTo(
            "#crab-money",
            {
              scale: 1.2,
            },
            {
              duration: 0.1,
              ease: "back.out(1.8)",
              scale: 1,
            }
          );
          crab.style.display = "inline-block";
        },
      }
    );
  }
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
  gsap.fromTo(
    "#crab-money",
    {
      scale: 1,
    },
    {
      duration: 0.1,
      ease: "power1.out",
      scale: 1.2,
      onComplete() {
        crab.style.display = "none";
        gsap.fromTo(
          "#money-crab",
          {
            scale: 0,
          },
          {
            duration: 0.4,
            ease: "back.out(1.8)",
            scale: 1,
          }
        );
        money.style.display = "inline-block";
      },
    }
  );
};
