let hamBurger = document.getElementById("hamburger");
let navMenu = document.getElementById("nav-menu");
let closeIcon = document.getElementById("close-line");
let Navlink = document.querySelectorAll(".nav__links");
Navlink.forEach((link) => {
  link.addEventListener("click", () => {
    alert("hello");
    navMenu.classList.add("hidden");
  });
});

hamBurger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});
closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});
// tabs.......................//
const tabs = document.querySelectorAll(".tab__wrap ul li");
const all = document.querySelectorAll(".item-wrap");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const bevarges = document.querySelectorAll(".bevrage");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    const tabval = tab.getAttribute("data-tabs");
    all.forEach((item) => {
      item.style.display = "none";
    });
    if (tabval == "food") {
      foods.forEach((item) => {
        item.style.display = "block";
        console.log(tabval);
      });
    } else if (tabval == "snack") {
      snacks.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "bevrage") {
      bevarges.forEach((item) => {
        item.style.display = "block";
      });
    } else
      all.forEach((item) => {
        item.style.display = "block";
      });
  });
});
// scroll-button
const scrollUp = () => {
  const scrollUpbtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollUpbtn.classList.remove("-bottom-1/2");
    scrollUpbtn.classList.add("bottom-4");
  } else {
    scrollUpbtn.classList.remove("bottom-4");
    scrollUpbtn.classList.add("-bottom-1/2");
  }
};
window.addEventListener("scroll", scrollUp);
// for border
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-SecondaryColor");
  } else {
    header.classList.remove("border-b", "border-SecondaryColor");
  }
};

window.addEventListener("scroll", scrollHeader);
//  dark & light mode
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");
if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}
themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});
function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

// light mode function
function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}
