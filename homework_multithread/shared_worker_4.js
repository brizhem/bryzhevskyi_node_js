const { Worker } = require("worker_threads");

const arrItems = require("./items");
console.log(Array.isArray(arrItems));

const size = Int32Array.BYTES_PER_ELEMENT * arrItems.length;
console.log(`buffer size: ${size} \n`);

const sharedBuffer = new SharedArrayBuffer(size);
const sharedArray = new Int32Array(sharedBuffer);

console.log(`Shared array size, before data: ${sharedArray} \n`);

arrItems.forEach((item, index) => {
  Atomics.store(sharedArray, index, item.quantity * item.price);
});

console.log(`Shared array: ${sharedArray} \n`);

const worker = new Worker("./workers_process.js");

worker.on("message", (result) => {
  console.log(`Total sum without VAT: ${result}`);
});

worker.on("error", (error) => {
  console.log(error);
});

worker.postMessage({ items: sharedArray });
