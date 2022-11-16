import { nanoid } from "nanoid";
import type { WebSocketBehavior } from "uWebSockets.js";
import logger from "./utils/logger.js";
import { MSG } from "./utils/parse.js";

const chat: WebSocketBehavior = {
  upgrade: (res, req, ctx) => {
    const key = req.getHeader("sec-websocket-key");
    const protocol = req.getHeader("sec-websocket-protocol");
    const extensions = req.getHeader("sec-websocket-extensions");

    res.upgrade({ key }, key, protocol, extensions, ctx);
  },
  open(ws) {
    logger.info(Buffer.from(ws.getRemoteAddressAsText()).toString());
    logger.info(ws["key"]);
  },
  message: (ws, msg) => {
    const data = MSG.parse(msg);
    const meta = { id: nanoid(), time: Date.now() };

    switch (data.type) {
      case "message":
        return ws.publish(data.channel, MSG.stringify({ ...data, meta }));
      case "connect":
        ws.subscribe(data.channel);
        return ws.publish(data.channel, MSG.stringify({ ...data, meta }));
      case "disconnect":
        ws.unsubscribe(data.channel);
        return ws.publish(data.channel, MSG.stringify({ ...data, meta }));
      case "exit":
        return ws.end();
      default:
        throw "Invalid message type";
    }
  },
};

export default chat;
