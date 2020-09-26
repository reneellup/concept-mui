import DashboardView from "./views/DashboardView";
import MainLayout from "./layouts/MainLayout";
import { Navigate } from "react-router-dom";
import React from "react";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "dashboard", element: <DashboardView /> },
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "*", element: <Navigate to="/dashboard" /> },
    ],
  },
];

export default routes;
