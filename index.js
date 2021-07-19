const { convertArrayToCSV: arrayToCSV } = require('convert-array-to-csv');

const dataObjects = [
  {
    number: 1,
    first: 'Mark',
    last: 'Otto',
    handle: '@mdo',
  },
  {
    number: 2,
    first: 'Jacob',
    last: 'Thornton',
    handle: '@fat',
  },
  {
    number: 3,
    first: 'Larry',
    last: 'the Bird',
    handle: '@twitter',
  },
];

const csvFromArrayOfObjects = arrayToCSV(dataObjects);
console.log(csvFromArrayOfObjects);

// --------------------------------------------------- //

const header = ['number', 'first', 'last', 'handle'];
const dataArrays = [
  [1, 'Mark', 'Otto', '@mdo'],
  [2, 'Jacob', 'Thornton', '@fat'],
  [3, 'Larry', 'the Bird', '@twitter'],
];

const csvFromArrayOfArrays = arrayToCSV(dataArrays, {
  header,
  separator: ';'
});
console.log(csvFromArrayOfArrays);