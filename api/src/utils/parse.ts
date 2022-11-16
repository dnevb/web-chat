import type { Message } from "../types";

export const parseMsg = (buffer: ArrayBuffer): Message => {
  try {
    const string = Buffer.from(buffer).toString();

    return JSON.parse(string);
  } catch (e) {
    throw "Invalid payload";
  }
};
export const ToBuffer = (obj: Object) => {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    throw "Invalid payload";
  }
};

export const MSG = {
  parse: parseMsg,
  stringify: ToBuffer,
};
