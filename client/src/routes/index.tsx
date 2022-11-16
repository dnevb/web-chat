import { createBrowserRouter } from "react-router-dom";
import Chat from "./chat/chat";

export default createBrowserRouter([
  {
    path: "/",
    element: "hello",
  },
  {
    path: ":id",
    element: <Chat />,
  },
]);
