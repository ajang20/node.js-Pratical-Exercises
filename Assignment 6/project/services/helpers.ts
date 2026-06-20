import type { IncomingMessage } from "node:http";

const getChunk = <T>(req: IncomingMessage): Promise<T> => {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const MAX_SIZE = 2048;
    let totalSize = 0;

    req.on("data", (chunk) => {
      totalSize += chunk.length;
      console.log(`chunk received:${chunk.length}bytes`);

      if (totalSize > MAX_SIZE) {
        reject({ status: 413, message: "Payload too large" });
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on("end", () => {
      try {
        const body = Buffer.concat(chunks).toString("utf-8");
        const parse = JSON.parse(body)
        resolve(parse);
      } catch {
        reject({ status: 400, message: "Malformed JSON" });
      }
    });

    req.on("error", (err: Error) => {
      reject({ status: 500, message: err.message });
    });
  });
};

export default getChunk