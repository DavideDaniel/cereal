var numbers = [];

for (var i = 0; i <= 100; i++) {
	numbers.push(i);
}
console.log(Math.floor(Math.random()*(numbers.length - 1 + 1) + 1));

 