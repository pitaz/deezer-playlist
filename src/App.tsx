import React from 'react';
import './App.scss';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes';
import Navbar from './component/NavBar';

function App() {
  return (
    <>
     <Navbar />
    <RouterProvider router={router} />
    </>
  );
}

export default App;
