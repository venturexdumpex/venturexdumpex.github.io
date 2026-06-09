/* --------------------------------------------------------------------
Audio/Intro Screen Logic
-------------------------------------------------------------------- */
const intro = document.getElementById("intro-screen");
const music = document.getElementById("bgMusic");

music.volume = 0.05;

intro.addEventListener("click", () => {
  music.play();

  intro.classList.add("hidden");

  setTimeout(() => {
    intro.remove();
  }, 500);
});

document.addEventListener("click", () => {
  const sound = new Audio("click.mp3");
  sound.volume = 0.3;
  sound.play();
});

/* --------------------------------------------------------------------
DVD Logo Animation Logic
-------------------------------------------------------------------- */
const box = document.getElementById("dvdBox");

let x = 100;
let y = 100;

let dx = 5;
let dy = 5;

function animate() {
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;

  const maxX = window.innerWidth - boxWidth;
  const maxY = window.innerHeight - boxHeight;

  x += dx;
  y += dy;

  const maxSpeed = 10;

  if (x <= 0 || x >= maxX) {
    dx *= -2;

    if (Math.abs(dx) > maxSpeed) {
      dx = Math.sign(dx) * maxSpeed;
    }
  }

  if (y <= 0 || y >= maxY) {
    dy *= -2;

    if (Math.abs(dy) > maxSpeed) {
      dy = Math.sign(dy) * maxSpeed;
    }
  }

  box.style.left = x + "px";
  box.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();

/* --------------------------------------------------------------------
Particles
-------------------------------------------------------------------- */
const container = document.getElementById("particles");

function createParticle() {
  const particle = document.createElement("div");

  particle.classList.add("particle");

  // Choose what falls
  const symbols = ["🌸"];
  particle.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.fontSize = Math.random() * 20 + 15 + "px";
  particle.style.animationDuration = Math.random() * 5 + 5 + "s";

  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 10000);
}

// Spawn forever
setInterval(createParticle, 300);
