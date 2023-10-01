// ArtistCard.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import ArtistCard from "./";

test("renders ArtistCard component", () => {
  const { container } = render(
    <ArtistCard
      imageSrc="image.jpg"
      artistName="John Doe"
      title="Love the way you lie"
      handleClick={function (artistId: number): void {
        throw new Error("Function not implemented.");
      }}
      id={0}
    />
  );

  expect(container.firstChild).toBeInTheDocument();
});
