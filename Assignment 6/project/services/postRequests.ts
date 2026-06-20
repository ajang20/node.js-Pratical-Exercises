import { IncomingMessage, ServerResponse } from "node:http";
import getChunk from "./helpers";
import { WriteData } from "./read_and_write_data";
import crypto from "node:crypto";
import { ReadData } from "./read_and_write_data";
import type {ClientRegister,Register,login} from "./Types"

export const registerUser = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const data = await getChunk<ClientRegister>(req);
  if (!data.email) {
    res.writeHead(409);
    return res.end(
      JSON.stringify({ sucess: false, message: "Must add Email" }),
    );
  }
  const newItem: Register = {
    id: crypto.randomUUID(),
    ...data,
    password: crypto.createHash("sha256").update(data.password).digest("hex"),
    createdAt: new Date().toISOString(),
  };

  await WriteData(newItem, "users");
  res.writeHead(201);
  return res.end(JSON.stringify({ success: true, data: newItem }));
};

export const loginUser = async (req: IncomingMessage, res: ServerResponse) => {
  const users: Register[] = await ReadData("users");
  const data = await getChunk<login>(req);
  const userItem = users.find(
    (item) =>
      item.password ===
        crypto.createHash("sha256").update(data.password).digest("hex") &&
      item.email === data.email,
  );

  if (!userItem) {
    res.writeHead(401);
    return res.end(
      JSON.stringify({ success: false, message: "Wrong password" }),
    );
  }
  const itemResponse = {
    token: crypto.createHash("sha256").update(data.password).digest("hex"),
    userId: userItem.id,
    createdAt: new Date().toISOString(),
  };
  await WriteData(itemResponse, "login");
  res.writeHead(201);
  res.end(JSON.stringify({ sucess: true, data: itemResponse }));
};

export const logoutUser = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {};
