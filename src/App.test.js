import { render, screen } from '@testing-library/react';
import ImageContainer from './components/ImageContainer';

const imageMock = {
  "id": "0",
  "author": "Alejandro Escamilla",
  "width": 5616,
  "height": 3744,
  "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
  "download_url": "https://picsum.photos/id/0/5616/3744"
}

test("username exists", () => {
  const { queryByTestId } = render(
    <ImageContainer image={imageMock} />
  );
  expect(queryByTestId('imagetest')).toBeNull();
});