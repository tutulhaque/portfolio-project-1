const backToTopBtn = document.getElementById("footer-btn");
const openModalBtn = document.querySelector("#open-modal-btn");
const myModal = document.querySelector("#myModal");
const closeBtn = document.querySelector("#close-btn");
const dayNightToggle = document.getElementById("day-night-toggle");

// Dark and Light Mode
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("day-night-toggle");
  const themeIcon = document.getElementById("theme-icon");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.setAttribute("name", "sunny-outline");
  }

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeIcon.setAttribute("name", "sunny-outline");
      localStorage.setItem("theme", "dark");
    } else {
      themeIcon.setAttribute("name", "moon-outline");
      localStorage.setItem("theme", "light");
    }
  });
});

// Dark and Light Mode End

// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-navigation");

  menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("active");
  });
});
// Mobile Menu End

// Code for Hero section Type Heading
let typingText = new Typed("#text", {
  strings: ["Saif", "Designer", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});
// Code for Hero section Type Heading end

// code for Scroll Top Button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.pointerEvents = "auto";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.pointerEvents = "none";
  }
}
function backToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// code for Scroll Top Button End

function displayModal() {
  myModal.classList.add("displayModal");
}

// code for Modal Box
function closeModal() {
  myModal.classList.remove("displayModal");
  myModal.classList.add("overlay");
}
// code for Modal Box End
backToTopBtn.addEventListener("click", backToTop);
openModalBtn.addEventListener("click", displayModal);
closeBtn.addEventListener("click", closeModal);
dayNight.addEventListener("click", lightDark);
