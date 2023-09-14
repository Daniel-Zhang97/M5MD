import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.js'
import TopNavBar from './components/top-nav-bar.js'
import './index.css'

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
      <App />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
)
