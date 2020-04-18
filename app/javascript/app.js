import React, { Fragment } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import 'app.scss'

const App = _ => {
  return(
    <Fragment>
      <Button color='primary'>
        Testando o bulma
      </Button>
    </Fragment>
  )
}

export default App;