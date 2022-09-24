import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { WikiProvider } from '@/Contexts'

import { HomePage } from '@/Components/Pages'
import { WikiPage } from '@/Components/Pages'

import * as Styled from '@/Assets/Styles/Global'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: '/wiki',
    element: <WikiPage />
  },

  {
    path: '/wiki/:id',
    element: <WikiPage />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Styled.GlobalStyle />

    <WikiProvider>
      <RouterProvider router={router} />
    </WikiProvider>
  </React.StrictMode>
)
