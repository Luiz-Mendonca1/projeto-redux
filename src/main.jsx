import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { router } from './App'
import './index.css'

// Crie o router DEPOIS de ter a store disponível
const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)