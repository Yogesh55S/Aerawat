import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./App.jsx";
import { RecentlyViewedProvider } from "./context/RecentlyViewedContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RecentlyViewedProvider>
        <Layout />
      </RecentlyViewedProvider>
    </BrowserRouter>
  </StrictMode>
);