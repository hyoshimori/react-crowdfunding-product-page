import React from 'react';
import { render } from '@testing-library/react';
import Project from '../main/Project';

describe('#Project compontnent', () => {
  test('if Project component exists or not', () => {
    render(<Project />)
  })
})
