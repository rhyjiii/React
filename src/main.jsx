import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MyHeader from './Components/header';
import Rhy from './Components/rhy';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyHeader />
    <Rhy/>
  </React.StrictMode>,
)
