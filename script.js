function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
    console.log('clicked');
}
// Load time
window.addEventListener("load", () => {
  const time = performance.now().toFixed(0);
  document.getElementById("loadTime").innerText =
    `Loaded in ${time} ms ⚡`;
});

// Live clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// Console message (hidden)
console.log("👀 Hey developer! Thanks for checking my portfolio.");

// CTA click
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".cta span");

  if (btn) {
    btn.addEventListener("click", () => {
      alert("Let's connect 😄");
    });
  }
});