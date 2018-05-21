var fs = require('fs');
var http = require('http');

var server = http.createServer(function(request, response) {
	// 파일을 읽어 응답 스트림과 pipe()로 연결합니다.
	var inStream = fs.createReadStream('./output.txt');
	inStream.pipe(response);
});

server.listen(7001, '127.0.0.1');