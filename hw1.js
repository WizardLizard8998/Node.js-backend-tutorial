const area = (radius) => {
  return radius * radius * Math.PI;
};

const argument = process.argv.slice(2);

const res = area(argument[0] * 1);

console.log(res);
