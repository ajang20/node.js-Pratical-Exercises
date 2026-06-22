import fs from "node:fs"
import fsp from "node:fs/promises"
import { fileURLToPath } from "node:url"
import path from "node:path"

const filepath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filepath)
const DATA_FILE = path.join(__dirname,"data.json")

export const ReadData = async() => {
    if (!fs.existsSync(DATA_FILE)){
        await fsp.writeFile(DATA_FILE,JSON.stringify([]))
    }

    const raw = await fsp.readFile(DATA_FILE,"utf-8")
    return JSON.parse(raw)
}

export const WriteData = async (data) => {
    await fsp.writeFile(DATA_FILE,JSON.stringify(data,null,2),"utf-8")
}