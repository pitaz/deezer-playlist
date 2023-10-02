// Navbar.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from ".";
import store from "../../store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

jest.mock("../../component/ArtistCard", () => () => (
  <div data-testid="mock-artist-card" />
));


test("renders Navbar component", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>
  );

  const navbarElement = screen.getByTestId("navbar");
  const logoElement = screen.getByText("Deezer");
  const searchInput = screen.getByPlaceholderText("Search");

  expect(navbarElement).toBeInTheDocument();
  expect(logoElement).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});
