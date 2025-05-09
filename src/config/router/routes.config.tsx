import type { RouteObject } from 'react-router'
import { Layout } from '../../layout/Layout'
import { LoginPage } from '../../features/login/LoginPage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
]
