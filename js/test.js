const string = "1234567890123456";
let result = '';
for (let index = 0; index < string.length; index++) {
    if (index % 4 === 0) {
        result += ' '
    }
    result += string[index]
}