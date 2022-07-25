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

console.log(`\n*** Slice`);
console.log(`\n*** Slice does not mutate the original array`);
console.log(starTrekShows.slice(1, -2));
console.log(`${starTrekShows}`);

console.log();
