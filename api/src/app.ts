import { App, us_socket_local_port } from "uWebSockets.js";
import chat from "./chat.js";
import logger from "./utils/logger.js";

const app = App();

app.ws("/chat", chat);

app.listen(8000, (socket) =>
  logger.info("listening on port: %d", us_socket_local_port(socket))
);
