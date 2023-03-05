import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockIsContactSelected = jest.fn();
const mockSetIsContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('renders Nav', () => {
        render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} isContactSelected={mockIsContactSelected} setIsContactSelected={mockSetIsContactSelected} />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} isContactSelected={mockIsContactSelected} setIsContactSelected={mockSetIsContactSelected} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });

    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory} />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});