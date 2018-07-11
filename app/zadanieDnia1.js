//Twój kod

const fs = require('fs');
const crypto = require('crypto');

const file = process.argv[2];

fs.readFile(file, (err, data) => {
	if (err===null) {
		const hash = crypto.createHmac('sha256', data).digest('hex');
		console.log(hash==='4f7ae6569b55cb6275423ca1cdf31475e607da1d5204c110a58fb480c96e6eca');
	} else {
		console.log('błąd podczas odczytu pliku', err);
	}
});