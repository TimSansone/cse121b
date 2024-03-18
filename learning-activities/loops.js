myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
// Step 4: For each favorite food in the favoriteFoods property, create
// an HTML <li> element and place its value in the <li> element
// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[0];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoriteFoods[1];

// let favoriteFood1 = document.createElement("li");
// favoriteFood1.textContent = myInfo.favoriteFoods[2];

// let favoriteFood2 = document.createElement("li");
// favoriteFood2.textContent = myInfo.favoriteFoods[3];

// using forEach loop to display list of favorite foods
const foodsElement = document.querySelector("#favorite-foods");
// function useForEach ( myInfo )
// {
//     let favoriteFoods = myInfo.favoriteFoods;
//     favoriteFoods.forEach( food =>
//     {
//         let displayFood = document.createElement( "li" );
//         displayFood.textContent = food;
//         foodsElement.appendChild(displayFood)
//     } );
// }

// useForEach( myInfo );

// another forEach loop

// using .map loop to display list of favorite foods
// const foodsElement = document.querySelector("#favorite-foods");
//  function mapFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     return favoriteFood;
//  }

// Activity 3

const placesElement = document.querySelector("#places-lived");
// 
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}

//
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}
//
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate);

// foodsElement.innerHTML = foodListElements.join('');

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector( "#favorite-foods" ).appendChild( favoriteFood1 );
document.querySelector( "#favorite-foods" ).appendChild( favoriteFood2 );
document.querySelector( "#favorite-foods" ).appendChild( favoriteFood3 );
document.querySelector( "#favorite-foods" ).appendChild( favoriteFood4 );