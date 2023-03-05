import React from   'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //renders about tests
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        //render about
        // asFragment returns a snapshot
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();

    });
});