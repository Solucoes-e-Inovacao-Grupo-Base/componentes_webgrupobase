import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { envFromHost, cfg } from "./environments/map";

const ENV = envFromHost(window.location.hostname);
(window as any).__ENV__ = cfg(ENV);

const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          lazy: () => import("./pages/Home").then((module) => ({ Component: module.default }))
        },
        {
          path: "about",
          lazy: () => import("./pages/About").then((module) => ({ Component: module.default }))
        },
        {
          path: "services",
          lazy: () => import("./pages/Services").then((module) => ({ Component: module.default }))
        },
        {
          path: "contact",
          lazy: () => import("./pages/Contact").then((module) => ({ Component: module.default }))
        },
        {
          path: "status",
          lazy: () => import("./pages/Status").then((module) => ({ Component: module.default }))
        },
        {
          path: "docs",
          lazy: () => import("./pages/Docs").then((module) => ({ Component: module.default }))
        },
        {
          path: "blog",
          lazy: () => import("./pages/Blog").then((module) => ({ Component: module.default }))
        }
      ]
    }
  ]
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-lg">Carregando...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
