/**
 * Різниця Fork та Worker полягає в тому, що воркери запускаються на тому ж процесі, але з своїм контекстом, тобто
 * використовують менше памяті та можуть ділитись нею.
 * */
const { Worker } = require("worker_threads");

const worker = new Worker("./worker_process");

const arrItems = require("./items");

worker.on("message", (result) => {
  console.log(
    `Total quantity: ${result.totalQuantity}. Total sum: ${result.totalSum}`
  );
});

worker.on("error", (error) => {
  console.log(error);
});

worker.on("exit", (exitCode) => {
  console.log("Finished with code", exitCode);
});
console.log("Executed in the parent thread");

worker.postMessage(arrItems);
//orker.postMessage({ num: 12 });
