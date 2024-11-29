import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Router } from './routes/Router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | la pizzeria" />
      <Toaster richColors />
      <RouterProvider router={Router} />
    </HelmetProvider>
  )
}
