console.log(`\n*** Simple Array Methods`);

const starTrekShows = [
  `Original`,
  `Next Generation`,
  `Deep Space Nince`,
  `Voyager`,
  `Enterprise`,
  `Discovery`,
  `Picard`,
  `Strange New World`,
];

console.log(`${starTrekShows}`);

console.log(`\n*** SLICE`);
console.log(`\n*** Slice does not mutate the original array`);
console.log(starTrekShows.slice(1, -2));
console.log(`${starTrekShows}`);

console.log(`\n*** SPLICE`);
console.log(`\n*** Slice mutates the original array`);
// starTrekShows.splice(1, 2);
console.log(`${starTrekShows}`);

console.log(`\n*** REVERSE`);
console.log(`\n*** Reverse mutates the original array`);
console.log(`${starTrekShows.reverse()}`);

console.log(`\n*** CONCAT`);
console.log(
  `\n*** combines two arrays, but does not mutate the original arrays`
);
const starTrekShows2 = [`Prodigy`, `Lower Decks`];
// console.log(starTrekShows.concat(starTrekShows2));
// console.log(starTrekShows);
console.log(
  `\nthe spread operator is an alternative for combining two arrays. original arrays are not mutated.`
);
// console.log([...starTrekShows, ...starTrekShows2]);
const starTrekShows3 = [...starTrekShows, ...starTrekShows2];
console.log(starTrekShows3);

console.log(`\n*** JOIN`);
console.log(`\noriginal arrays are not mutated.`);
console.log(starTrekShows3.join('--'));

console.log(`\n*** AT method`);
console.log(
  `\nAT will display an element in an array based on an index. it is an alternative to the bracket method.`
);
console.log(`\n${starTrekShows3[3]}`);
console.log(`\n${starTrekShows3.at(3)}`);
console.log(
  `\nAT allows for an easier way to get the last element of an array with unknown length.`
);
console.log(`${starTrekShows3.at(-1)}`);

console.log(`\nAT is also useful for chaining.`);

console.log(`\n*** forEach`);
console.log(
  `\nforEach is a HOF that uses callback functions on each element. the callback function below is anonymous.`
);

starTrekShows3.forEach(function (x) {
  console.log(x);
});

console.log(
  `\naside from the element, the index numberand the array itself are passed to the callback function.`
);

starTrekShows3.forEach(function (x, i, arr) {
  console.log(`${i}: ${x}`);
});
