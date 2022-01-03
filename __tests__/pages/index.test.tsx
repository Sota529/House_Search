/**
 * @jest-environment jsdom
 */
import React from "react"
import Home from '../../src/pages/index'
import { render } from '../utils/index'

test('ホームページ', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})