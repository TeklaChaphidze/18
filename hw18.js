let three = [1,2,3];
console.log(three[0]);

three.push(4);
console.log(three);

three.shift();
console.log(three);

let another = [5,6,7,8]
another=another.map(x=>x+5);
console.log(another);


another.forEach(x=> console.log(x));