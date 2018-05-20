var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Calc() {
	this.title = 'calculator';
	
	this.on('stop', function() {
		console.log('Calc에 stop event 전달됨.');
	});
}

Calc.prototype.add = function(a, b) {
	return a + b;
};

util.inherits(Calc, EventEmitter);

module.exports = Calc;