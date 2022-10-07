console.log("1. görev");
console.log("2. görev");
console.log("3. görev");

// sync structure
const func1 = () => {
  console.log("func1 done");
};

const func2 = () => {
  console.log("func2 done");
};

//async structure
let x = 5;

console.log("1. process ", x);

setTimeout(() => {
  x = x + 5;
  console.log("2. process : ", x); // callback function
}, 4000);

x = x + 5;
console.log("3. process ", x);

const books = [
  { name: "kitap 1", author: "yazar1" },
  { name: "kitap 2", author: "yazar2" },
  { name: "kitap 3", author: "yazar3" },
];

// exp of callback

const listbook = () => {
  books.map((data, index) => {
    console.log(data);
  });
};

const addbook = (newbook, callback) => {
  books.push(newbook);
  callback(); // this is callback funct.
};

listbook();

addbook({ name: "kitap 4 ", author: "yazar4" }, listbook); // 2. arg is the funct we want.
