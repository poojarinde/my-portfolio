const cards = document.querySelectorAll(".project-card");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-modal");
    document.getElementById(id).style.display = "flex";
  });
});

closes.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});
window.addEventListener("click", (e) => {
  modals.forEach(m => {
    if (e.target === m) {
      m.style.display = "none";
    }
  });
});
