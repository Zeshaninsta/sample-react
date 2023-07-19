import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import * as Comm from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Comm.Header />
    <Comm.BackgroundImage />
  </StrictMode>
);
