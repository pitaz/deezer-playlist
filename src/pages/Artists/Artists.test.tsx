import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Artists from "./";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../component/ArtistCard", () => () => (
  <div data-testid="mock-artist-card" />
));

test("renders Artists component with 10 ArtistCard components", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Artists />
      </MemoryRouter>
    </Provider>
  );

  const artistsComponent = screen.getByTestId("artist-list");
  expect(artistsComponent).toBeInTheDocument();
});
