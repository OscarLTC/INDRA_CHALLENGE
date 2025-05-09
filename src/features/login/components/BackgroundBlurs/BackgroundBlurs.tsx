import blurPurple from '../../assets/blur-purple.png'
import blurPurpleMobile from '../../assets/blur-purple-mobile.png'
import blurCyan from '../../assets/blur-cyan.png'
import blurCyanMobile from '../../assets/blur-cyan-mobile.png'
import styles from './BackgroundBlurs.module.css'

export const BackgroundBlurs = () => {
  return (
    <>
      <div
        className={styles['blur__purple']}
        style={{
          backgroundImage: `url(${blurPurple})`,
        }}
      />
      <div
        className={styles['blur__purple-mobile']}
        style={{
          backgroundImage: `url(${blurPurpleMobile})`,
        }}
      />
      <div
        className={styles['blur__cyan']}
        style={{
          backgroundImage: `url(${blurCyan})`,
        }}
      />
      <div
        className={styles['blur__cyan-mobile']}
        style={{
          backgroundImage: `url(${blurCyanMobile})`,
        }}
      />
    </>
  )
}
