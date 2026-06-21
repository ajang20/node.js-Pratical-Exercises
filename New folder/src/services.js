// import { ReadData, WriteData } from "./read_and_write_files.js";
// import { getChunk } from "./helpers.js";
import { ReadData, WriteData } from "./helpers2.js";

export const handleGet = async (req, res) => {
  try {
    // const data = await ReadData(res);
    res.writeHead(200);
    await ReadData(res)
    // return res.end(data);
  } catch (err) {
    console.log("Error occured :", err.message);
    res.writeHead(500);
    res.end(`Internal Server Error : ${err.message}`);
  }
};

export const handlePost = async (req, res) => {
  try {
    // const body = await getChunk(req);
    await WriteData(req);
    res.writeHead(201);
    res.end("Data succesfully created!");
  } catch (err) {
    console.log("Error occured :", err.message);
    res.writeHead(500);
    res.end(`Internal Server Error : ${err.message}`);
  }
};
