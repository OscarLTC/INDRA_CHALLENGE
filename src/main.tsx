import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { PrimeReactProvider } from 'primereact/api'
import { PrimeReactConfig } from './config'

createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider value={PrimeReactConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PrimeReactProvider>
)
