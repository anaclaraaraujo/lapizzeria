import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { Router } from './routes/Router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'


export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="lapizzeria-theme">
        <Helmet titleTemplate="%s | la pizzeria" />
        <Toaster richColors />

        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
