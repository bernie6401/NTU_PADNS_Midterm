/* -----------------Original Code----------------- */
/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './practice_App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

/* -----------------React Router----------------- */
// /*
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout, { RootIndex } from "./pages/practice_index";
import About from "./pages/practice_about";
import "./index.css";

// If you use hash router, the sub-page will not pass to backend,
// it'll render at front end immediately instead
const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
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