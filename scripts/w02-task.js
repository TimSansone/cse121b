/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

/* declaring fullname variable */
const fullName = "Timothy Sansone";

/* getting current date and declaring/finding currentYear value */

let currentYear = new Date().getFullYear();

let profilePicture = "images/me.png";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

const favoriteFoods = ["Lasagna", "Pizza", "Fetuccini Alfredo", "Key Lime PIe"];
foodElement.innerHTML = favoriteFoods.join();

const newFood = "Chicken wings";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${newFood}`;

favoriteFoods.shift();
foodElement.innerHTML += "<br>" + favoriteFoods.join();

favoriteFoods.pop();
foodElement.innerHTML += "<br>" + favoriteFoods.join();
