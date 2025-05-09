import styles from './Footer.module.css'
import logoCompact from '../assets/footer-logo.png'
import logoExtend from '../assets/footer-logo-extend.png'

export const Footer = () => {
  return (
    <footer role='contentinfo' className={styles['footer']}>
      <div className={styles['footer__inner']}>
        <picture>
          <source media='(max-width: 640px)' srcSet={logoExtend} />
          <img
            src={logoCompact}
            alt='Logo RIMAC Seguros (versión compacta)'
            loading='lazy'
          />
        </picture>
      </div>
      <span className={styles['footer__text']}>
        © {new Date().getFullYear()} RIMAC Seguros y Reaseguros.
      </span>
    </footer>
  )
}
