const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names

// const names = characters.map((ch) => ch.name);
// console.log(names);

//2. Get array of all heights

// const heights = characters.map((ch) => ch.height);
// console.log(heights);

//3. Get array of objects with just name and height properties

// const withNameAndHeight = characters.map((ch) => {
//   return {
//     name: ch.name,
//     height: ch.height,
//   };
// });
// console.log(withNameAndHeight);

//4. Get array of all first names

// const firstNames = characters.map((ch) => ch.name.split(" ")[0]);
// console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters

// const totalMass = characters.reduce((acc, curr) => {
//   return acc + curr.mass;
// }, 0);

// console.log(totalMass);

//2. Get total height of all characters

// const totalHeights = characters.reduce((acc, curr) => {
//   return acc + curr.height;
// }, 0);

// console.log(totalHeights);

//3. Get total number of characters by eye color

// const eyeColorCount = characters.reduce((acc, character) => {
//   const eyeColor = character.eye_color;
//   acc[eyeColor] = (acc[eyeColor] || 0) + 1;
//   return acc;
// }, {});

// console.log(eyeColorCount);

//4. Get total number of characters in all the character names

// const charactersCount = characters.reduce((acc, curr) => {
//   return acc + curr.name.length;
// }, 0);

// console.log(charactersCount);

//***FILTER***
//1. Get characters with mass greater than 100

// const massGreatorThan100 = characters.filter((ch) => ch.mass > 100);
// console.log(massGreatorThan100);

//2. Get characters with height less than 200

// const heightLessThan200 = characters.filter((ch) => ch.height < 200);
// console.log(heightLessThan200);

//3. Get all male characters
// const maleList = characters.filter((ch) => ch.gender == "male");
// console.log(maleList);

//4. Get all female characters

// const femaleList = characters.filter((ch) => ch.gender == "female");
// console.log(femaleList);

//***SORT***
//1. Sort by mass

// const sortedByMass = characters.sort(
//   (a, b) => parseInt(a.mass) - parseInt(b.mass)
// );
// console.log(sortedByMass);

//2. Sort by height

// const sortedByHeight = characters.sort((a, b) => {
//   parseInt(a.height) - parseInt(b.height);
// });

// console.log(sortedByHeight);

//3. Sort by name

// const sortedByName = characters.sort((a, b) => {
//   const first = a.name.toLowerCase();
//   const second = b.name.toLowerCase();

//   if (first < second) {
//     return -1;
//   }
//   if (first > second) {
//     return 1;
//   }
//   return 0;
// });

// console.log(sortedByName);

//4. Sort by gender

// const sortedByGender = characters.sort((a, b) => {
//   const first = a.gender.toLowerCase();
//   const second = b.gender.toLowerCase();

//   if (first < second) {
//     return -1;
//   }
//   if (first > second) {
//     return 1;
//   }
//   return 0;
// });

// console.log(sortedByGender);

//***EVERY***
//1. Does every character have blue eyes?

// const allBlueEyes = characters.every((ch) => ch.eye_color == "blue");
// console.log(allBlueEyes);

//2. Does every character have mass more than 40?

// const allMassMoreThan40 = characters.every((ch) => ch.mass > 40);
// console.log(allMassMoreThan40);

//3. Is every character shorter than 200?

// const allShorterThan200 = characters.every((ch) => ch.height < 200);
// console.log(allShorterThan200);

//4. Is every character male?

// const allMale = characters.every((ch) => ch.gender == "male");
// console.log(allMale);

//***SOME***
//1. Is there at least one male character?

// const someMale = characters.some((ch) => ch.gender == "male");
// console.log(someMale);

//2. Is there at least one character with blue eyes?

// const someBlueEye = characters.some((ch) => ch.eye_color == "blue");
// console.log(someBlueEye);

//3. Is there at least one character taller than 210?
// const someTallerThan210 = characters.some((ch) => ch.height > 210);
// console.log(someTallerThan210);

//4. Is there at least one character that has mass less than 50?

// const someMassLess50 = characters.some((ch) => ch.mass < 50);
// console.log(someMassLess50);
