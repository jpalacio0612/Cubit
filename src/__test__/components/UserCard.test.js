import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { UserCard } from '../../components/UserCard'

const userMock = {
  id: 12,
  email: 'rachel.howell@reqres.in',
  first_name: 'Rachel',
  last_name: 'Howell',
  avatar:
    'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg'
}

describe('<UserCard />', () => {
  afterEach(() => {
    cleanup()
  })

  test('should render an user', () => {
    const { queryByText } = render(<UserCard user={userMock} />)
    expect(queryByText('Rachel')).toBeTruthy()
  })

  test('handleClick should be handled correctly', () => {
    const mockfunction = jest.fn()
    const { queryByText } = render(
      <UserCard user={userMock} handleClick={mockfunction} />
    )
    fireEvent.click(queryByText('Rachel'))
    expect(mockfunction).toHaveBeenCalled()
  })
})
