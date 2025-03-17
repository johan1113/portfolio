import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import { Route } from './types/routes';
import Home from './pages/home/index.tsx';
import './index.css';

const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    element: <Home />
  }
];
const router = createBrowserRouter(routes as RouteObject[]);
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
