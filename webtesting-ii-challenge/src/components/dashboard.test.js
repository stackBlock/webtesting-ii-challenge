import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';

import Dashboard from './dashboard';



describe('<Dashboard />', () => {
    it('registers a strike', () => {
        const { getByText } = render(<Dashboard />);
        // find the button
        const button = getByText(/strike/i);

        // click it
        fireEvent.click(button);


    });
});

describe('<Dashboard />', () => {
    it('registers a ball', () => {
        const { getByText } = render(<Dashboard />);
        // find the button
        const button = getByText(/ball/i);

        // click it
        fireEvent.click(button);


    });
});

describe('<Dashboard />', () => {
    it('registers a foul', () => {
        const { getByText } = render(<Dashboard />);
        // find the button
        const button = getByText(/foul/i);

        // click it
        fireEvent.click(button);


    });
});

describe('<Dashboard />', () => {
    it('registers a hit', () => {
        const { getByText } = render(<Dashboard />);
        // find the button
        const button = getByText(/hit/i);

        // click it
        fireEvent.click(button);


    });
});