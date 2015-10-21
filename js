#!/usr/bin/env node

var
	fs = require('fs-extra'),
	inFile = 'src/js/bootstrap.js',
	outFile = 'dist/public/js/bundle.js'
;

try {
	js();
} catch (e) {
   console.log(e);
}

function js() {
	browserify(inFile)
	//.then(minify)
	.then(save)
	.catch(function(err) {
		console.log(err);
	})
	;
}

function browserify(inFile) {
	return new Promise(function(resolve, reject) {
		console.log('Browserify ' + inFile);

		var browserify = require('browserify');

		browserify(inFile)
	      .transform('reactify', {es6: true, harmony: true})
	      .bundle(function(err, buff) {
				if (err)
					reject(err);
				else
					resolve(buff.toString());
			})
		;
	});
}

function minify(codeString) {
	return new Promise(function(resolve, reject) {
		console.log('Uglify...');

		var UglifyJS = require('uglify-js');

		var unminifiedCodeSize = codeString.length;
		console.log('Unminified code size: ' + unminifiedCodeSize + ' characters');
		var result = UglifyJS.minify(codeString, {fromString: true});
		var minifiedCode = result.code;
		var minifiedCodeSize = minifiedCode.length;
		console.log('minififed code size: ' + minifiedCodeSize +  ' characters, ' + Math.round(minifiedCodeSize / unminifiedCodeSize * 100) + '%');

		resolve(minifiedCode);
	});
}

function save(codeString) {
	console.log('Saving ' + outFile);
	fs.outputFileSync(outFile, codeString);
}
