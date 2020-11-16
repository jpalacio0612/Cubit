import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

axios.interceptors.request.use((req) => {
  req.headers = { 'cubit-test': 'Jonathan' }
  return req
})

ReactDOM.render(<App />, document.getElementById('root'))
