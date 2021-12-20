import { render, screen } from '@testing-library/react'
import ImageContainer from './ImageContainer';

const imageMock = {
    "id": "1011",
    "author": "Alejandro Escamilla",
    "width": 5472,
    "height": 3648,
    "url": "https://unsplash.com/photos/7BjmDICVloE",
    "download_url": "https://picsum.photos/id/1011/5472/3648"
}

describe('components/ImageContainer', () => {
    it('Renders a component', () => {
        render(
            <ImageContainer image={imageMock} />
        )

        const author = screen.getByText("Alejandro Escamilla")        
        expect(author).toBeInTheDocument()
    });
})