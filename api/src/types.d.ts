export type Action = {
  type: string;
  [key: string]: any;
};

export type Meta = {
  id: string;
  time: number;
  [key: string]: any;
};

export type Message = {
  type: "connect" | "disconnect" | "exit" | "message" | "upload";
  channel: string;
  meta: Meta;
  data?: Record<string, any>;
};

declare module "uWebSockets.js" {
  interface WebSocket {
    user: string;
  }
}
