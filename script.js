"use strict";
// selecting elements
const features = document.querySelector(".features");
const company = document.querySelector(".company");

const iconDown1 = document.querySelector(".icon-down1");
const iconUp1 = document.querySelector(".icon-up1");

const iconDown2 = document.querySelector(".icon-down2");
const iconUp2 = document.querySelector(".icon-up2");

const mainNav = document.querySelector(".main-nav");
const btnMobile = document.querySelector(".btn-mobile-nav");
const btnMenu = document.querySelector(".menu");
const btnClose = document.querySelector(".close");

const featMenu = document.querySelector(".feature-menu");
const comMenu = document.querySelector(".company-menu");

// event listener
btnMobile.addEventListener("click", function (e) {
  if (!btnMenu.classList.contains("open")) {
    btnMenu.classList.add("open");
    btnClose.classList.add("open");
    mainNav.classList.add("open");
  } else {
    btnMenu.classList.remove("open");
    btnClose.classList.remove("open");
    mainNav.classList.remove("open");
  }
});

featMenu.addEventListener("mouseover", function (e) {
  e.preventDefault();
});

// TOUCH MOBILE
// open dropdown menu on click
featMenu.addEventListener("click", function (e) {
  if (!featMenu.classList.contains("open-flex")) {
    featMenu.classList.add("open-flex");
  } else {
    featMenu.classList.remove("open-flex");
  }
});

comMenu.addEventListener("click", function (e) {
  if (!comMenu.classList.contains("open-flex")) {
    comMenu.classList.add("open-flex");
  } else {
    comMenu.classList.remove("open-flex");
  }
});

// for arrow icon
featMenu.addEventListener("click", function () {
  if (iconUp1.style.display === "inline-block") {
    iconDown1.style.display = "inline-block";
    iconUp1.style.display = "none";
  } else {
    iconDown1.style.display = "none";
    iconUp1.style.display = "inline-block";
  }
});
comMenu.addEventListener("click", function () {
  if (iconUp2.style.display === "inline-block") {
    iconDown2.style.display = "inline-block";
    iconUp2.style.display = "none";
  } else {
    iconDown2.style.display = "none";
    iconUp2.style.display = "inline-block";
  }
});

// features.addEventListener("mouseout", function () {
//   iconUp1.style.display = "none";
//   iconDown1.style.display = "inline-block";
// });

// company.addEventListener("mouseover", function () {
//   iconDown2.style.display = "none";
//   iconUp2.style.display = "inline-block";
// });

// company.addEventListener("mouseout", function () {
//   iconUp2.style.display = "none";
//   iconDown2.style.display = "inline-block";
// });
