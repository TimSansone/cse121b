/* LESSON 3 - Programming Tasks */

/* Profile Object  */

"use strict";

let myProfile = {
    name: 'Tim Sansone',
    photo: 'images/me.png',
    favoriteFoods: ['Lasagna', 'Pizza', 'Fried Chicken', 'Chicken Parmigana', 'Key Lime Pie'],
    hobbies: ['Liverpool soccer', 'Baseball', 'Cooking'],
    placeLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placeLived.push({ place: 'Orlando, FL', length: '30 years' });
myProfile.placeLived.push({ place: 'Deltona, FL', length: '6 years' });
myProfile.placeLived.push({ place: 'Winter Garden, FL', length: '6 years' });
myProfile.placeLived.push({ place: 'Saint Cloud, FL', length: '10 years' });


/* DOM Manipulation - Output */

/* Name */

const nameElement = document.getElementById('name');
nameElement.innerText = myProfile.name;

/* Photo with attributes */

const imageElement = document.getElementById('photo');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/

const foodList = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach((food) => {
    const foodElement = document.createElement('li');
    foodElement.textContent = food;
    foodList.appendChild(foodElement);
});

/* Hobbies List */

const hobbiesList = document.getElementById('hobbies');
myProfile.hobbies.forEach((hobby) => {
    const hobbyElement = document.createElement('li');
    hobbyElement.textContent = hobby;
    hobbiesList.appendChild(hobbyElement);
});

/* Places Lived DataList */

const placesElement = document.getElementById('places-lived');
myProfile.placeLived.forEach(place => {
    const placeElement = document.createElement('dl');
    const lengthElement = document.createElement('dt');
    placeElement.textContent = place.place
    lengthElement.textContent = place.length

    placesElement.append(placeElement, lengthElement)
})
