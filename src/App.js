import React from "react";
import { AddTodo, AllTodos, EditTodo } from "./screens";
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
  },
  {
    path: AppRoutes.editTodo,
    element: <EditTodo />
  }
])

function App() {
  return (<RouterProvider router={router} />);
}

export default App;
