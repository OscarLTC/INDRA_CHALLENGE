import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router'
import { useLoginStore } from '../../../features/login/store/loginStore'

interface Props {
  children: ReactNode
}

export const RequireAuth = ({ children }: Props) => {
  const { summary } = useLoginStore()
  const location = useLocation()

  if (!summary) {
    return <Navigate to='/' state={{ from: location }} replace />
  }
  return <>{children}</>
}
