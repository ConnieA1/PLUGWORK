import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GalleryPage from "./Gallery.jsx";
import "./index.css";

const Page = window.location.pathname === "/gallery.html" ? GalleryPage : App;

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
