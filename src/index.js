import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Router from './config/router'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
)
