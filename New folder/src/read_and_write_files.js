import fsp from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filepath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filepath);
const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");

export const ReadData = async () => {
  if (!fs.existsSync(inputPath)) {
    await fsp.writeFile(inputPath, "", "utf-8");
  }
  const text = await fsp.readFile(inputPath, "utf-8");
  return text;
};

export const WriteData = async (data) => {
  await fsp.writeFile(outputPath, data, "utf-8");
};
