import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import { ReduxProvider } from "./app/providers/ReduxProvider";
import { AppRouterProvider } from "./app/providers/router";

import "./shared/styles/reset.css";
import "./shared/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <AppRouterProvider />
    </ReduxProvider>
  </StrictMode>
);
