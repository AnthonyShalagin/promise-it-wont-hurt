/*
  * Declare a function `attachTitle` which prepends `'DR. '` to its firstargument and returns the result.
  * Create a fulfilled promise with a value of `'MANHATTAN'`.
  * Build a promise chain off the promise we just constructed that first calls`attachTitle` then calls `console.log`.
*/

'use strict';

function attachTitle (arg) {
	return 'DR. ' + arg;
}

Promise.resolve('MANHATTAN')
	.then(attachTitle)
	.then(console.log(error.message));
