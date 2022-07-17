"use strict";
// selecting elements
const features = document.querySelector(".features");
const company = document.querySelector(".company");

const iconDown1 = document.querySelector(".icon-down1");
const iconUp1 = document.querySelector(".icon-up1");

const iconDown2 = document.querySelector(".icon-down2");
const iconUp2 = document.querySelector(".icon-up2");

// event listener

features.addEventListener("mouseover", function () {
  iconDown1.style.display = "none";
  iconUp1.style.display = "inline-block";
});

features.addEventListener("mouseout", function () {
  iconUp1.style.display = "none";
  iconDown1.style.display = "inline-block";
});

company.addEventListener("mouseover", function () {
  iconDown2.style.display = "none";
  iconUp2.style.display = "inline-block";
});

company.addEventListener("mouseout", function () {
  iconUp2.style.display = "none";
  iconDown2.style.display = "inline-block";
});

// navDrop.forEach(function (value) {
//   value.addEventListener("mouseover", function () {
//     iconDown.style.display = "none";
//     iconUp.style.display = "inline-block";
//   });
// });
