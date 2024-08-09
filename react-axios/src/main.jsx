import React, { Children } from "react";
import ReactDOM from "react-som/client";
import App from "./App";

import {createBrowserRoute, RouterProvider, Route} from "react-router-dom";

import "./index.css";

const router = createBrowserRoute([
  {
    element: <App />,
    children: [
      {
        path: "/",
      },
      {
        path: "/new",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
