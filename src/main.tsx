import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Global, css } from '@emotion/react'
import App from './App'

const queryClient = new QueryClient()

const globalStyles = css`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; margin: 0; }
  body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background: #f7fafc; color: #0f172a; }
`

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
