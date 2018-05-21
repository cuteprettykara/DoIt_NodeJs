var fs = require('fs');

// 파일을 비동기식으로 읽어 들입니다.
fs.readFile('./packages.json', 'utf-8', function(err, data) {
	if (err) {
		console.log('*** error가 발생하였습니다.');
		throw err;
	}
	
	console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');