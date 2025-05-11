import { type RouteObject } from 'react-router'
import { Layout } from '../../layout/Layout'
import { LoginPage } from '../../features/login'
import { PlansPage } from '../../features/plans/pages/PlansPage'
import { WizardLayout } from '../../layout/WizardLayout'
import { SummaryPage } from '../../features/plans/pages/SummaryPage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: 'plans',
        element: <WizardLayout />,
        children: [
          {
            index: true,
            element: <PlansPage />,
          },
          {
            path: 'summary',
            element: <SummaryPage />,
          },
        ],
      },
    ],
  },
]
