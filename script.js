const jsConfetti = new JSConfetti();

function triggerConfetti() {
  jsConfetti.addConfetti({
    emojis: ["❤️", "❤️", "❤️"],
    confettiNumber: 100,
    confettiRadius: 6,
  });
}

let slideIndex = 1;
showSlides(slideIndex);

// Automatic slideshow
function startAutoSlide() {
  setInterval(() => {
    changeSlide(1); // Move to next slide
  }, 5000); // Change slide every 5 seconds
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) slideIndex = 1; // Loop back to first slide
  if (n < 1) slideIndex = slides.length; // Loop to last slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function showLoveLetter() {
  document.getElementById("loveLetterModal").style.display = "flex";
}

function closeLoveLetter() {
  document.getElementById("loveLetterModal").style.display = "none";
}

// ─── THE COUNTDOWN ────────────────────────────────────────────────────────
//
// Set BIRTHDAY_ISO and everything else follows. The +03:00 is TURKEY time, so
// it turns over at midnight where he is rather than at midnight here, which is
// an hour later and would have the card wishing him happy birthday while it is
// still the day before for him.
//
// Leave it null and the line hides itself rather than showing something wrong.
// The old version was hardcoded to 2025-07-27 in CAT and had been counting
// DOWNWARDS past zero ever since, reading "Days until your birthday: -403".
const BIRTHDAY_ISO = "2026-09-03T00:00:00+03:00"; // 3 Sept 2026, Turkey time

function updateCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;

  if (!BIRTHDAY_ISO) { el.style.display = "none"; return; }

  const target = new Date(BIRTHDAY_ISO);
  const days = Math.ceil((target - new Date()) / 86400000);

  if (days > 1)       el.textContent = `${days} days until your birthday`;
  else if (days === 1) el.textContent = "Tomorrow.";
  else if (days === 0) el.textContent = "It's today. Happy birthday.";
  else                 el.textContent = "Happy birthday, again.";
}

setInterval(updateCountdown, 1000); // Update every second
window.onload = function () {
  triggerConfetti();
  updateCountdown();
  startAutoSlide(); // Start the automatic slideshow
};
