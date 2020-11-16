import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Questions } from '../../components/Questions'

describe('<Questions />', () => {
  afterEach(cleanup)

  test('Should render correctly', () => {
    const { queryByText } = render(<Questions />)
    expect(queryByText('¿Que es una prueba unitaria?')).toBeTruthy()
  })
})
