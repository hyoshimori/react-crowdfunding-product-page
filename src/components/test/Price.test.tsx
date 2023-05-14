import React from 'react';
import  { render } from '@testing-library/react';
import Price from '../main/Price';

describe('#Price component', () => {
  test('if Price component exists or not', () => {
    render(<Price />)
  })
})
