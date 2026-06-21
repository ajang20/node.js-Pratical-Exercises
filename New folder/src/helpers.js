export const getChunk = (req) => {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      const body = Buffer.concat(chunks).toString();
      resolve(body);
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
};
