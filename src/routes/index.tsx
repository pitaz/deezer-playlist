import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import "../index.css";
import Artists from "../pages/Artists";
import ArtistDetails from "../pages/ArtistDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Artists />,
  },
  {
    path: "/:id",
    element: <ArtistDetails />,
  },
]);