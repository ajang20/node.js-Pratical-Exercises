import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import fsp from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "users.json");

//READ FILE
export const ReadFile = async () => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fsp.writeFile(DATA_FILE, JSON.stringify([]));
    }

    const raw = await fsp.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to fetch data : ", err.message);
  }
};

//WRITE FILE
export const writeFile = async (data) => {
  try {
    await fsp.writeFile(DATA_FILE, JSON.stringify(data));
  } catch (err) {
    console.error("Failed to write file : ", err.message);
  }
};
