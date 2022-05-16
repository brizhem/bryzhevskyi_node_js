//Записуємо замовлений товар до бази даних (в моєму випадку до файлу))
const fs = require("fs");

const writeItemsOnDatabase = (items) => {
  let data = "";
  items.forEach((item) => {
    data += JSON.stringify(item) + ",";
  });

  fs.writeFile("basket.txt", data, (err) => {
    if (err) throw err;
  });
};

process.on("message", (message) => {
  if (message.name === "START") {
    console.log("Child process received START message");

    const items = message.items;
    let messageOut = "";
    try {
      writeItemsOnDatabase(items);
      messageOut = "items add in basket";
    } catch (err) {
      console.log(err);
      messageOut = "items didn't add in basket";
    }

    process.send(messageOut);
  }
});
