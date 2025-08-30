//1.
function countItems(array, condition) {
  let count = 0;
  for (let item of array) {
    if (condition(item)) {
      count++;
    }
  }
  return count;
}

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));

//2.
function calculate(a, b, operation) {
  return operation(a, b);
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));

//3.
function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    messageCreator(i);
  }
}
repeatMessage(2, (i) => console.log("hello"));

//4.
function processMovies(movies, action) {
  for (let i = 0; i < movies.length; i++) {
    action(movies[i], [i]);
  }
}

const movies = [{ title: `purple hearts`, year: 2022, genre: `romance` }];

const movieTitle = (movie, index) => {
  console.log(`${index + 0}`);
};

console.log(``);
processMovies(movie, movieTitle);