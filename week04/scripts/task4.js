/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself

// let myInfo = {}

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// let myInfo = {
//     name: 'Emerson'
// } 

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// let myInfo = {
//     name: 'Emerson',
//     photo: "images/profile.jpg"
// } 

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// let myInfo = {
//     name: 'Emerson',
//     photo: "images/profile.jpg",
//     favoriteFoods: ['Pizza','Pasta','Ice cream'],
// } 

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// let myInfo = {
//     name: 'Emerson',
//     photo: "images/profile.jpg",
//     favoriteFoods: ['Pizza','Pasta','Ice cream'],
//     hobbies : {'hobbies' : ['Watching Movies, Playing Video Games, Going to Restaurants with My Wife']},
// } 

// Step 6: Add another property named placesLived with a value of an empty array

// let myInfo = {
//     name: 'Emerson',
//     photo: "images/profile.jpg",
//     favoriteFoods: ['Pizza','Pasta','Ice cream'],
//     hobbies : {'hobbies' : 'Watching Movies, Playing Video Games, Going to Restaurants with My Wife'},
//     locaisLived : {}
 
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// let myInfo = {
//     name: 'Emerson',
//     photo: "images/profile.jpg",
//     favoriteFoods: ['Pizza','Pasta','Ice cream'],
//     hobbies : {'hobbies' : 'Watching Movies, Playing Video Games, Going to Restaurants with My Wife'},
//     locaisLived : {'place' : 'São Paulo', 'length' : '2 years'}

// } 

// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived

let myInfo = {
    name: 'Emerson',
    photo: "images/profile.jpg",
    favoriteFoods: ['Pizza','Pasta','Ice cream'],
    hobbies: ['Watching Movies', 'Playing Video Games', 'Going to Restaurants with My Wife'],
    localsLived: [{place:'São Paulo', length:'2 years'}, {place: 'Fortaleza', length: '22 years'}]

} 

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

document.querySelector("#name").innerHTML = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

document.querySelector("img").setAttribute("src", myInfo.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

document.querySelector("img").setAttribute("alt", myInfo.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

let foodList = document.getElementById('favorite-foods');

for( i = 0; i < myInfo.favoriteFoods.length; i++) {

    let foodItem = document.createElement('li');

    foodItem.innerHTML = myInfo.favoriteFoods[i];
    foodList.appendChild(foodItem);
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

let hobbyList  = document.querySelector('#hobbies');

for( i = 0; i < myInfo.hobbies.length; i++) {
    let hobby = myInfo.hobbies[i];

    let hobbyItem = document.createElement('li');

    hobbyItem.innerHTML = hobby;
    hobbyList.appendChild(hobbyItem);
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

myInfo.localsLived.forEach((localLived) => {
    let placesLocalLived = document.createElement('dt'); 
    placesLocalLived.textContent = localLived.place; 

    let placesWorkedLength = document.createElement('dd');
    placesWorkedLength.textContent = localLived.length;
   
    document.querySelector('#places-lived').appendChild(placesLocalLived);
    document.querySelector('#places-lived').appendChild(placesWorkedLength);
})
