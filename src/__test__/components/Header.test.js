import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Header } from '../../components/Header'

describe('<Header />', () => {
  afterEach(cleanup)

  test('Should render correctly', () => {
    const { queryByText } = render(<Header />)

    expect(queryByText('Cubit')).toBeTruthy()
    expect(queryByText('Home')).toBeTruthy()
    expect(queryByText('Preguntas')).toBeTruthy()
  })
})
