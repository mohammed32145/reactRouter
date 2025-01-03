import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import About from './About/About';

export default function App() {
  let x = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'Portfolio', element: <Portfolio /> },
        { path: 'Contact', element: <Contact /> },
        { path: 'About', element: <About /> },
        { path: 'Home', element: <Home /> },
      ],
    },
  ], {
    basename: '/reactRouter'  // إضافة basename هنا
  });

  return <RouterProvider router={x} />;
}
