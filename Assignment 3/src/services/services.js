import { ReadFile, writeFile } from "../Helpers/helpers.js";
import { v4 as uuidv4 } from "uuid";

export const getAll = async (req, res, next) => {
  const data = await ReadFile();

  res.status(200).json({
    success: true,
    count: data.length,
    data: data,
  });
};

//Retrieve a specific Data
export const getById = async (req, res, next) => {
  const data = await ReadFile();
  const { id } = req.params;

  const filteredItem = data.find((item) => item.id === id);
  if (!filteredItem) {
    return res.status(404).json({
      success: false,
      message: "Item not found",
    });
  }

  res.status(200).json({ success: true, data: filteredItem });
};

//Create Data
export const create = async (req, res, next) => {
  const data = await ReadFile();
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ success: false, message: "Name is a must" });
  }
  if (!email) {
    return res.status(400).json({ success: false, message: "Email is a must" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ success: false, message: "password is a must" });
  }
  const newData = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  const updatedData = [...data, newData];
  await writeFile(updatedData);

  res.status(201).json({
    success: true,
    data: newData,
  });
};
//Update specific Data
export const updateById = async (req, res, next) => {
  const data = await ReadFile();
  const { id } = req.params;
  const index = data.findIndex((item) => item.id === id);

  const updatedItem = { ...data[index], ...req.body, id: data[index].id };
  data[index] = updatedItem;
  await writeFile(data);

  res.status(200).json({ success: true, data: updatedItem });
};

//Delete specific data
export const deleteById = async (req, res, next) => {
  const data = await ReadFile();
  const { id } = req.params;

  const itemId = data.findIndex((item) => item.id === id);
  if (itemId === -1) {
    return res.status(400).json({ success: false, message: "Item not found" });
  }

  const deleted = data.splice(itemId, 1);
  await writeFile(data);
  res.status(200).json({
    success: true,
    message: "Item successfully deleted",
    data: deleted[0],
  });
};
