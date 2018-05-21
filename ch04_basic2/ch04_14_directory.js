var fs = require('fs');

fs.mkdir('./docs', 0666, function(err) {
	if (err) {throw err;}
	
	console.log('새로운 docs 폴더를 만들었습니다.');
	console.log('docs 폴더를 5초 후에 삭제합니다.');
	
	setTimeout(function() {
		fs.rmdir('./docs', function(err) {
			if (err) {throw err;}
			
			console.log('docs 폴더를 삭제했습니다.');
		});
	}, 5000);
});