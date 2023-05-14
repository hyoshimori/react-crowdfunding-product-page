import React from 'react';
import { render } from '@testing-library/react'
import About from '../main/About'

describe("# About component", () => {
  test('if About component exsits or not', () => {
    render(<About />)
  })
})
