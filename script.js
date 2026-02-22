const reveals = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

  reveals.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add("active");
    }
  });

  document.querySelectorAll("section").forEach(section=>{
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");

    if(window.scrollY >= top && window.scrollY < bottom){
      navLinks.forEach(l=>l.classList.remove("active"));
      document.querySelector('.navbar a[href="#'+id+'"]')?.classList.add("active");
    }
  });

});

/* MODALS */
function openModal(type){
  if(type==="bidnow"){
    document.getElementById("bidnowModal").style.display="flex";
  }
  if(type==="portfolio"){
    document.getElementById("portfolioModal").style.display="flex";
  }
}

function closeModal(type){
  if(type==="bidnow"){
    document.getElementById("bidnowModal").style.display="none";
  }
  if(type==="portfolio"){
    document.getElementById("portfolioModal").style.display="none";
  }
}

/* CONTACT FORM VALIDATION */
document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("message").value.trim();
  let formMsg = document.getElementById("formMsg");

  if(name==="" || email==="" || msg===""){
    formMsg.innerText="Please fill all fields.";
    return;
  }

  formMsg.innerText="Message sent successfully!";
  this.reset();
});