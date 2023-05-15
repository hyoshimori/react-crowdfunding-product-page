import React from 'react';
import { render } from '@testing-library/react'
import BackThisProject from '../main/BackThisProject';

describe("# BackThisProject component", () => {
  test('if BackThisProject component exsits or not', () => {
    render(<BackThisProject />)
  })
})
