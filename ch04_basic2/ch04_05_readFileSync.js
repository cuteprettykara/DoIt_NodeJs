var fs = require('fs');

// 파일을 동기식으로 읽어 들입니다.
var data = fs.readFileSync('./package.json', 'utf-8');
console.log(data);