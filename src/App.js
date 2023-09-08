import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./utils/routes";

/**
 * ! Simple hack to remember
 * ? createBrowserRouter with RouterProvider
 */

// createBrowserRouter has two params:
// 1. array of routes and/or nested routes
// 2. DOM router options
const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
