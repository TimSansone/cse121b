/* LESSON 3 - Programming Tasks */

/* Profile Object  */

"use strict";

let myProfile = {
    name: 'Tim Sansone',
    photo: 'images/me.png',
    favoriteFoods: ['Lasagna', 'Pizza', 'Fried Chicken', 'Chicken Parmigana', 'Key Lime Pie'],
    hobbies: ['Traveling', 'Sports', 'Cooking'],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Orlando, FL',
        length: '30 years'
    },
    {
        place: 'Deltona, FL',
        length: '6 years'
    },
    {
        place: 'Winter Garden, FL',
        length: '6 years'
    },
    {
        place: 'Saint Cloud, FL',
        length: '10 years'
    }
);

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

let locationsLived = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    locationsLived.appendChild(dt);
    locationsLived.appendChild(dd);
});
