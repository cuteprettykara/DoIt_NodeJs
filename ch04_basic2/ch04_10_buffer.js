// 버퍼 객체를 크기만 지정하여 만든 후 문자열을 씁니다.
var output = '안녕 1!';
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf-8');
console.log('buffer1의 크기 : %d', Buffer.byteLength(buffer1));
console.log('buffer1에 쓰인 문자열의 길이 : %d', len);
console.log('첫 번째 버퍼의 문자열 : [%s]\n', buffer1.toString());

// 버퍼 객체를  문자열을 이용해 만듭니다.
var buffer2 = new Buffer('안녕 2!');
console.log('buffer2의 크기 : %d', Buffer.byteLength(buffer2));
console.log('두 번째 버퍼의 문자열 : [%s]', buffer2.toString());

// 타입을 확인합니다.
console.log('버퍼 객체의 타입 : %s\n', Buffer.isBuffer(buffer1));

// 버퍼 객체에 들어 있는 문자열 데이터를 문자열 변수로 만듭니다.
var byteLen = Buffer.byteLength(buffer1);
var str1 = buffer1.toString('utf8', 0, byteLen);
var str2 = buffer2.toString('utf8');
console.log('str1 : [%s]', str1);
console.log('str2 : [%s]', str2);

// 첫 번째 버퍼 객체의 문자열을 두 번째 버퍼 객체로 복사합니다.
buffer1.copy(buffer2, 0, 0, len);
console.log('두 번째 버퍼에 복사한 후의 문자열 : %s', buffer2.toString('utf8'));

// 두 개의 버퍼를 붙여줍니다.
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('두 개의 버퍼를 붙인 후의 문자열 : %s', buffer3.toString('utf8'));


var buffer3 = Buffer.from('Hello', 'utf8');
console.log('\nbuffer3의 크기 : %d', Buffer.byteLength(buffer3));

var str3 = buffer3.toString('utf8', 0, Buffer.byteLength(buffer3));
console.log('str3 : [%s]', str3);
