var input = process.argv[2];

var fibstart = [0, 1];

//for loop
	for (i = 0; i < input; i++) {
	var x = parseInt((fibstart[i]) + (fibstart[i+1]));
	fibstart.push(x);
	
	}

	console.log(fibstart)

