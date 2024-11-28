import "./global.css";

import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/Router";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | la pizzeria" />
      <RouterProvider router={Router} />
    </HelmetProvider>
  );
}
