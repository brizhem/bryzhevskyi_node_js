//Обчислюємо загальну суму покупки буз ПДВ
const { parentPort } = require("worker_threads");

parentPort.on("message", ({ items }) => {
  let totalSumWithoutVAT = 0;
  items.forEach((sum) => {
    totalSumWithoutVAT += sum / 1.2;
  });
  parentPort.postMessage(totalSumWithoutVAT);
});
