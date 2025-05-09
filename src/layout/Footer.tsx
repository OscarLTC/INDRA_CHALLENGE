import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer role='contentinfo' className={styles['footer']}>
      <div className={styles['footer__inner']}>
        <picture>
          <source
            media='(max-width: 640px)'
            srcSet='/src/assets/img/footer-logo-extend.png'
          />
          <img
            src='/src/assets/img/footer-logo.png'
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
