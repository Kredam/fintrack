import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import { CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={5000}
          maxSnack={5}
          preventDuplicate={true}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
)
