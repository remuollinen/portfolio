"use strict";

// DOM selections

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");

// Navigation links

hamburger.addEventListener("click", function () {
  nav.classList.toggle("menu-show");
});
