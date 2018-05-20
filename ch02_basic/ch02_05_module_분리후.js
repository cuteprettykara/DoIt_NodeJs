var calc = require('./ch02_05_calc');
var calc2 = require('./ch02_05_calc2');


console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));
console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d', calc2.add(10, 10));