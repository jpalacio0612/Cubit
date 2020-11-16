import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { UserDetails } from '../../components/UserDetails'
import moxios from 'moxios'

const userMock = {
  data: {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
  }
}

describe('<UserDetails />', () => {
  beforeEach(() => moxios.install())

  afterEach(() => {
    moxios.uninstall()
    cleanup()
  })

  test('should request and render a user info', async (done) => {
    const { queryByText } = render(<UserDetails userId='2' />)

    moxios.wait(() => {
      const req = moxios.requests.mostRecent()
      req
        .respondWith({
          status: 200,
          response: userMock
        })
        .then(() => {
          expect(queryByText('Janet Weaver')).toBeTruthy()
          expect(queryByText('janet.weaver@reqres.in')).toBeTruthy()
          done()
        })
    })
  })
})
