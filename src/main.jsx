import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RecentlyViewedProvider } from "./context/RecentlyViewedContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecentlyViewedProvider>
      <App />
    </RecentlyViewedProvider>
  </StrictMode>
);
