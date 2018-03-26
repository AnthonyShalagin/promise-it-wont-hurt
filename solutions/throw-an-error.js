function parsePromised(input) {
	return new Promise(function (fulfill, reject) {
		try {
			fulfill(JSON.parse(input));
		} catch (e) {
			reject(e);
		}
	});
}

function onReject (error) {
	console.log(error.message);
}

parsePromised(process.argv[2])
 .then(null, onReject);
