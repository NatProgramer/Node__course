const fs = require('fs');

fs.writeFile('./Data/first.txt', 'La tengo re atada', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
	fs.readFile('./Data/first.txt', 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
		fs.writeFile('./Data/second.txt', 'Que onda gente', (err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log(data);
			}
			fs.readFile('./Data/second.txt', 'utf-8', (err, data) => {
				if (err) {
					console.log(err);
				} else {
					console.log(data);
				}
			});
		});
	});
});
