import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'
import TopNavBar from './components/top-nav-bar.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <TopNavBar />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('topNavBar')
)

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
)
