import React from 'react';
import { render } from '@testing-library/react';
import ThankYou from '../main/ThankYou';

describe('# ThankYou component', () => {
  test('if ThankYou component exists or not', () => {
    render(<ThankYou />)
  })
})
