import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';

import Display from './display';



describe('<Display />', () => {
    test('registers a strike', () => {
        const { getByText } = render(<Display />);

        getByText(/strike/i)
        getByText(/ball/i)
        getByText(/foul/i)
        getByText(/hit/i)


    });
});