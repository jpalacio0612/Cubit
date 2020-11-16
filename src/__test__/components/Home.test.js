import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Home } from '../../components/Home'
import moxios from 'moxios'

const userMock = {
  page: 2,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg'
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg'
    },
    {
      id: 9,
      email: 'tobias.funke@reqres.in',
      first_name: 'Tobias',
      last_name: 'Funke',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg'
    },
    {
      id: 10,
      email: 'byron.fields@reqres.in',
      first_name: 'Byron',
      last_name: 'Fields',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg'
    },
    {
      id: 11,
      email: 'george.edwards@reqres.in',
      first_name: 'George',
      last_name: 'Edwards',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg'
    },
    {
      id: 12,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg'
    }
  ],
  support: {
    url: 'https://reqres.in/#support-heading',
    text:
      'To keep ReqRes free, contributions towards server costs are appreciated!'
  },
  ad: {
    company: 'Slack',
    description:
      'Where work happens. All the tools your team needs in one place.',
    url:
      'https://srv.buysellads.com/ads/click/x/GTND42JECWBDL537CKYLYKQNCTBIVK3MCYBD6Z3JCYYDP2Q7CT7I527KCKAI4KQ7CA7I5K7NCKADK5QLCTBDL27KC6SDT2QWCABDTK3EHJNCLSIZ'
  }
}

describe('<Home />', () => {
  beforeEach(() => moxios.install())

  afterEach(() => {
    moxios.uninstall()
    cleanup()
  })

  test('should request and render a list of users', async (done) => {
    const { queryByText } = render(<Home />)

    moxios.wait(() => {
      const req = moxios.requests.mostRecent()
      req
        .respondWith({
          status: 200,
          response: userMock
        })
        .then(() => {
          expect(queryByText('Michael')).toBeTruthy()
          expect(queryByText('Lindsay')).toBeTruthy()
          expect(queryByText('Tobias')).toBeTruthy()
          expect(queryByText('Byron')).toBeTruthy()
          expect(queryByText('Rachel')).toBeTruthy()
          done()
        })
    })
  })
})
