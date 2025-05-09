import { FaPhone } from 'react-icons/fa6'
import styles from './Header.module.css'
import logo from '../assets/header-logo.png'

export const Header = () => {
  return (
    <header className={styles['header']}>
      <img src={logo} alt='Logo RIMAC Seguros' />
      <nav aria-label='Contacto' className={styles['nav']}>
        <span className={styles['nav__badge']}>¡Compra por este medio!</span>
        <a
          href='tel:(01)4116001'
          aria-label='Llama al (01) 411 6001'
          className={styles['nav__link']}
        >
          <FaPhone className={styles['nax__icon']} />
          (01) 411 6001
        </a>
      </nav>
    </header>
  )
}
