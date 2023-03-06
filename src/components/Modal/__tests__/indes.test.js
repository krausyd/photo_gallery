import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockCloseModal = jest.fn();
const mockCurrentPhoto = {
    name: 'Pancakes',
    category: 'food',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 0,
};

afterEach(cleanup);

describe('Modal tests', () => {
    it('renders', () => {
        render(<Modal onClose={mockCloseModal} currentPhoto={mockCurrentPhoto} />);
    });

    it('looks like snapshot', () => {
        const { asFragment } = render(<Modal onClose={mockCloseModal} currentPhoto={mockCurrentPhoto} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('closes the modal', () => {
        const { getByText } = render(<Modal onClose={mockCloseModal} currentPhoto={mockCurrentPhoto} />);
        fireEvent.click(getByText('Close this modal'));
        expect(mockCloseModal).toHaveBeenCalledTimes(1);
    });
});