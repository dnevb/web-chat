import { nanoid } from "nanoid";
import type { WebSocketBehavior } from "uWebSockets.js";
import { MSG } from "./utils/parse.js";

const message: WebSocketBehavior["message"] = (ws, msg) => {
  const data = MSG.parse(msg);
  const meta = {
    id: nanoid(),
    time: Date.now(),
  };

  switch (data.type) {
    case "message":
      return ws.publish(
        data.channel,
        MSG.stringify({ ...data, meta, payload: data.data || {} })
      );
    case "connect":
      return ws.subscribe(data.channel);
    case "disconnect":
      ws.unsubscribe(data.channel);
      ws.user;

      return ws.publish(
        data.channel,
        MSG.stringify({
          ...data,
          meta,
        })
      );
    case "exit":
      return ws.end();
    default:
      throw "Invalid message type";
  }
};

export default message;
