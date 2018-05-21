var Calc = require('./ch04_04_calc_good');

var calc = new Calc();

console.log('3 + 5 = %d', calc.add(3, 5));

setTimeout(function() {
	calc.emit('stop');
}, 2000);

console.log(calc.title + '에 stop 이벤트를 전달함.');