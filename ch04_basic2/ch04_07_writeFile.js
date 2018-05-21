var fs = require('fs');

fs.writeFile('./output.txt', '안녕하세요', function(err) {
	if (err) {
		console.log('*** error가 발생하였습니다.');
		throw err;
	}
	
	console.log('output.txt 파일에 데이터 쓰기 완료');
});