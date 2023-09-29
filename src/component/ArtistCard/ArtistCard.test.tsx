// ArtistCard.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import ArtistCard from './';

test('renders ArtistCard component', () => {
  const { container } = render(
    <ArtistCard
      imageSrc="image.jpg"
      artistName="John Doe"
      numberOfFans={1000}
    />
  );

  expect(container.firstChild).toBeInTheDocument();
});
