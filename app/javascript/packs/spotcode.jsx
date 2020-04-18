import React from 'react'
import ReactDOM from 'react-dom'
import App from '../app'

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <App></App>,
    document.getElementById('root'),
  )
})
