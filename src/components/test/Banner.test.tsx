import React from 'react';
import { render } from '@testing-library/react'
import Banner from '../main/Banner'

describe("# Banner component", () => {
  test('if Banner component exists or not', () => {
    render(<Banner />)
  })
})
