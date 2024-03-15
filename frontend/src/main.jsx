import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalState from './Context-Api/Global-Context'
import App
 from './App'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalState>
    <App />
    </GlobalState>
  </React.StrictMode>,
)
