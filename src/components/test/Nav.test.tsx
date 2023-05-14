import React from 'react';
import { render } from '@testing-library/react';
import Nav from '../main/Nav';

describe('# Nav component', () => {
  test('if Nav component exists or not', () => {
    render(<Nav />)
  })
})
