/* -----------------Original Code----------------- */
/*
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './practice/practice_App'
// import './index.css'
import Headers from "./pages/header";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headers />
  </React.StrictMode>,
)
*/

/* -----------------React Router----------------- */
// /*
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { RootIndex } from "./pages/index";
import About from "./pages/about";
import Headers from "./pages/header";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <Headers />,
    children: [
      { index: true, element: <RootIndex /> },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// */