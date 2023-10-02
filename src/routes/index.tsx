import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import "../index.scss";
import Artists from "../pages/Artists";
import ArtistDetails from "../pages/ArtistDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Artists />,
  },
  {
    path: "/artist/:id",
    element: <ArtistDetails />,
  },
]);