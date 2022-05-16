//Обчислюємо загальну кілкість і суму товарів, які замовленні.
const { parentPort } = require("worker_threads");

parentPort.on("message", (items) => {
  let totalQuantity = 0;
  let totalSum = 0;

  items.forEach((item) => {
    totalQuantity += item.quantity;
    totalSum += item.price * item.quantity;
  });
  parentPort.postMessage({ totalQuantity: totalQuantity, totalSum: totalSum });
});
