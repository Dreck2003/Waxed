import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import {Provider} from 'react-redux'
import state from './redux/store/store';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={state}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
