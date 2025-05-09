import { Outlet } from 'react-router'
import { Header } from './Header'
import styles from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={styles['layout']}>
      <Header />
      <Outlet />
    </div>
  )
}
