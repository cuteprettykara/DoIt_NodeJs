var url = require('url');

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=kard');

// URL객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);
console.log('\n');

// 요청 파라미터 분리하기
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('요청 파라미터 중 where의 값 : %s', param.where);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
console.log('url객체의 query의 값 : %s', curURL.query);