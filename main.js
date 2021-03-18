"use strict";

// DOM selections

// const intro = document.getElementById("intro");
// const projects = document.getElementById("projects");
// const contact = document.getElementById("nav-contact");

const github = document.getElementById("github");
const linkedin = document.getElementById("linkedin");
const email = document.getElementById("email");

const project1 = document.getElementById("project__1");
const project2 = document.getElementById("project__2");
const project3 = document.getElementById("project__3");
const project4 = document.getElementById("project__4");

// Functions
const moveUp = function (e) {
  e.target.style.transform = "translateY(-4px)";
};

const moveDown = function (e) {
  e.target.style.transform = "translateY(0px)";
};

const upScale = function (e) {
  e.currentTarget.style.transform = "scale(1.05)";
};
const downScale = function (e) {
  e.currentTarget.style.transform = "scale(1)";
};

// Event handlers

// Navigation links
// intro.addEventListener("mouseover", moveUp);
// intro.addEventListener("mouseout", moveDown);

// projects.addEventListener("mouseover", moveUp);
// projects.addEventListener("mouseout", moveDown);

// contact.addEventListener("mouseover", moveUp);
// contact.addEventListener("mouseout", moveDown);

// Project grid
project1.addEventListener("mouseover", upScale);
project1.addEventListener("mouseout", downScale);

project2.addEventListener("mouseover", upScale);
project2.addEventListener("mouseout", downScale);

project3.addEventListener("mouseover", upScale);
project3.addEventListener("mouseout", downScale);

project4.addEventListener("mouseover", upScale);
project4.addEventListener("mouseout", downScale);

// Contact icons
github.addEventListener("mouseover", moveUp);
github.addEventListener("mouseout", moveDown);

linkedin.addEventListener("mouseover", moveUp);
linkedin.addEventListener("mouseout", moveDown);

email.addEventListener("mouseover", moveUp);
email.addEventListener("mouseout", moveDown);
