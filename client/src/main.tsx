import "@unocss/reset/tailwind.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "uno.css";
import App from "./App";
import "./base.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
