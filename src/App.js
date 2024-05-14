import React from "react";
import { AddTodo, AllTodos } from "./screens";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./router/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={AppRoutes.allTodos} />
  },
  {
    path: AppRoutes.allTodos,
    element: <AllTodos />
  },
  {
    path: AppRoutes.addTodo,
    element: <AddTodo />
  }
])

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
