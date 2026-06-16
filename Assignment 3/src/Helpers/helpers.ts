import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import fsp from "node:fs/promises";
import type { Item } from "../services/services.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "users.json");

//READ FILE
export const ReadFile = async () => {
  console.log("Inside the readFile")
  try {
    if (!fs.existsSync(DATA_FILE)) {
      await fsp.writeFile(DATA_FILE, JSON.stringify([]));
    }

    const raw = await fsp.readFile(DATA_FILE, "utf8");
    return JSON.parse(raw);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Failed to fetch data : ", err.message);
    } else {
      console.error("An unexpected error occurred:", err);
    }
    return []
  }
};

//WRITE FILE
export const writeFile = async (data: Item[]) => {
  try {
    await fsp.writeFile(DATA_FILE, JSON.stringify(data));
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Failed to write file : ", err.message);
    } else {
      console.error("An unexpected error occurred:", err);
    }
  }
};
