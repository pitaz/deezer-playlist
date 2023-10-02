import React from "react";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { router } from "./routes";
import Navbar from "./component/NavBar";
import store from "./store";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Replay(),
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

function App() {
  return (
    <Provider store={store}>
      <Navbar  data-testid="navbar"/>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
