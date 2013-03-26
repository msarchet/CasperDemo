var casper = require('casper').create();

casper.start('http://www.google.com', function() { 
	this.viewport(1920,1080);
});

casper.then(function(){	
	this.captureSelector('googlelogo.png', '#lga img');
});

casper.then(function() { 
	console.log('hello jesse');
});

casper.run();