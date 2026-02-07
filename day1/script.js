const button = document.getElementById("roseBtn");
const imageBox = document.getElementById("imageBox");

button.addEventListener("click", () => {
  imageBox.style.display = "block";
  burstConfettiFromButton(button);
});

function burstConfettiFromButton(btn) {
  const rect = btn.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  const total = 120; // BIG BURST 🎉

  for (let i = 0; i < total; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    const type = Math.random();

    if (type < 0.33) {
      confetti.classList.add("red");
    } else if (type < 0.66) {
      confetti.classList.add("white");
    } else {
      confetti.classList.add("rose");
      confetti.textContent = "🌹";
    }

    confetti.style.left = originX + "px";
    confetti.style.top = originY + "px";

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 50;

    const xMove = Math.cos(angle) * distance;
    const yMove = Math.sin(angle) * distance + 200;

    confetti.animate(
      [
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        {
          transform: `translate(${xMove}px, ${yMove}px) rotate(360deg)`,
          opacity: 0
        }
      ],
      {
        duration: Math.random() * 2000 + 3000,
        easing: "ease-out"
      }
    );

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}
