'use strict';

var promiseOne = first();

var promiseTwo = promiseOne.then(function (secretVal) {
	return second(val);
});

promiseTwo.then(console.log);

