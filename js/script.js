// Hire button
const hireBtn = document.getElementById("hireBtn");

hireBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
});


// Modal logic (single modal for all projects)
const viewButtons = document.querySelectorAll(".viewBtn");
const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

viewButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modalTitle.textContent = btn.getAttribute("data-title");
    modalDesc.textContent = btn.getAttribute("data-desc");
    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
});


// Contact form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields");
    return;
  }

  alert("Message sent successfully!");
  form.reset();
});
