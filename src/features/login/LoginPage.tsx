import { Footer } from '../../layout/Footer'
import { BackgroundBlurs } from './components/BackgroundBlurs'
import { LoginForm } from './LoginForm'
import styles from './LoginPage.module.css'

export const LoginPage = () => {
  return (
    <div className={styles['login-page']}>
      <div className={styles['login-page__container']}>
        <div className={styles['login-page__hero']}>
          <img
            src='/src/features/login/assets/portada-login.png'
            alt='background'
            className={styles['login-page__image']}
          />
        </div>
        <div className={styles['login-page__content']}>
          <div className={styles['login-page__section']}>
            <div className={styles['login-page__header']}>
              <div className={styles['login-page__header-content']}>
                <div className={styles['login-page__badge']}>
                  <span className={styles['login-page__badge-text']}>
                    Seguro Salud Flexible
                  </span>
                </div>
                <h1 className={styles['login-page__title']}>
                  Creado para ti y tu familia
                </h1>
              </div>
              <img
                src='/src/features/login/assets/portada-login.png'
                alt='background'
                className={styles['login-page__hero-mobile']}
              />
            </div>
            <p className={styles['login-page__subtitle']}>
              Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
              asesoría. 100% online.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      <Footer />
      <BackgroundBlurs />
    </div>
  )
}
