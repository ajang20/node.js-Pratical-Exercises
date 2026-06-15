const {parentPort} = require("node:worker_threads")


     const start = Date.now();
  for (let i = 0; i < 5000000000; i++) {
    if (i === 5000000000 - 1) {
      console.log(i);
    }
  }

  const end = Date.now();
  const time = end - start;

  parentPort.postMessage(time)
