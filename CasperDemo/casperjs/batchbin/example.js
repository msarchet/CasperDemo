var casper = require('casper').create();

casper.start('http://localhost:3000', function() {
	this.echo(this.getHTML());
});

casper.then(function() {
	this.viewport(1920,1080);	
});

casper.then(function() {
	this.capture('big.png', {top:0, left:0, width:1920, height:1080 });
});

casper.then(function() {
	this.viewport(300,300);	
});

casper.then(function() {
	this.capture('small.png', {top:0, left:0, width:300, height:300});
});

casper.then(function() {
	this.echo(this.fetchText('.left'));
});

casper.then(function() {
	this.test.assertTextExists('This text');
});

casper.run();
