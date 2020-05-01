import React, { Fragment } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'app.scss'
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/common/menu';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'

const App = _ => {
  return(
    <Fragment>
    <ReactNotification />
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </Fragment>
  )
}

export default App;