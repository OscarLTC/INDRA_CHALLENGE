import { Outlet } from 'react-router'
import { Header } from './Header'

export const Layout = () => {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Header />
      <Outlet />
    </div>
  )
}
