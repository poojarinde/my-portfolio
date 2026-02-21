/* ---------- Project Modals ---------- */

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

window.addEventListener("click", e => {
  modals.forEach(m => {
    if(e.target === m){
      m.style.display = "none";
    }
  });
});


/* ---------- Contact Form Validation ---------- */

const form = document.getElementById("contactForm");
const msg  = document.getElementById("formMsg");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === ""){
    msg.style.color = "red";
    msg.textContent = "Please fill all fields.";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "Message sent successfully!";

  form.reset();
});


/* ---------- Scroll Reveal Animation ---------- */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();