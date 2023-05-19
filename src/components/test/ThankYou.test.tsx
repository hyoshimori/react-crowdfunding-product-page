import React from 'react';
import { render } from '@testing-library/react';
import ThankYou from '../main/ThankYou';

describe('# ThankYou component', () => {
  test('if ThankYou component exists or not', () => {
    const mockResetPerkSelection = jest.fn();
    // Passing mock as a fake prop to ThankYou component
    render(<ThankYou resetPerkSelection={mockResetPerkSelection}/>)
  })
})
