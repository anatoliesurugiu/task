const numbers = [ 12, 11, 11, 18, 18, 7, 9 ];

function getAverage(numbers){
    return Math.floor(numbers.reduce((x, y) => x + y) / numbers.length);
  }

console.log(getAverage(numbers));