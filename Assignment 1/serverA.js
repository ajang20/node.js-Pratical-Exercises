const http = require("node:http");

const serverA = http.createServer((req, res) => {
  //getting url & method
  const { url, method } = req;

  //setting Header
  res.setHeader("Content-Type", "application/json");

  if (url === "/heavy" && method === "GET") {
    const start = Date.now();
    for (let i = 0; i < 5000000000; i++) {
      if (i === 5000000000 - 1) {
        console.log(i);
      }
    }

    const end = Date.now();
    const time = end - start;

    res.writeHead(200);
    res.end(
      JSON.stringify({
        sucess: true,
        time: time,
        message: "Heavy task completed",
      }),
    );
  }
});

serverA.listen(3000, () => {
  console.log("ServerA is connected Successfully:");
});



// serverA.listen(4000, () => {
//   console.log("ServerA is connected Successfully:");
// });

