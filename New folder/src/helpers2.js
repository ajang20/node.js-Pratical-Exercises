
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

const __filepath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);
const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");

export const ReadData = async (res) => {
 
    if(!fs.existsSync(inputPath)){
        throw new Error("Input not found")
    }
    const readStream = fs.createReadStream(inputPath, "utf-8");
    const readStream2 = fs.createReadStream(inputPath, "utf-8");
    const writeStream = fs.createWriteStream(outputPath, "utf-8");

    await pipeline(readStream,writeStream)
    await pipeline(readStream2,res)
};

export const WriteData = async (data) => {
    const writeStream = fs.createWriteStream(inputPath, "utf-8");
    await pipeline(data,writeStream)
};
