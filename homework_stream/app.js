const LimitSizeStream = require("./LimitSizeStream");
const fs = require("fs");

const limitedStream = new LimitSizeStream({ limit: 8 }); // 8 байт
const outStream = fs.createWriteStream("out.txt");

limitedStream.pipe(outStream);

limitedStream.write("hello"); // 'hello' - це 5 байт, тому цей стрінг повністю записаний у файл

setTimeout(() => {
  limitedStream.write("world"); // помилка LimitExceeded! у файлі лишилось лише 'hello'
}, 10);
