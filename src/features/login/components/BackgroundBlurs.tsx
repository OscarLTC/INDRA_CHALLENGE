import blurPurple from '../assets/blur-purple.png'
import blurPurpleMobile from '../assets/blur-purple-mobile.png'
import blurCyan from '../assets/blur-cyan.png'
import blurCyanMobile from '../assets/blur-cyan-mobile.png'

export const BackgroundBlurs = () => {
  return (
    <>
      <div
        className={`hidden sm:block absolute -top-10 left-0 w-[400px] h-full bg-cover -z-10`}
        style={{
          backgroundImage: `url(${blurPurple})`,
        }}
      />
      <div
        className='block sm:hidden absolute -top-0 -left-10 w-[400px] h-full bg-cover -z-10'
        style={{
          backgroundImage: `url(${blurPurpleMobile})`,
        }}
      />
      <div
        className='hidden sm:block absolute -top-20 right-0 w-[400px] h-full bg-cover -z-10'
        style={{
          backgroundImage: `url(${blurCyan})`,
        }}
      />
      <div
        className='block sm:hidden absolute -top-21 right-0 w-[600px] h-full bg-cover -z-10'
        style={{
          backgroundImage: `url(${blurCyanMobile})`,
        }}
      />
    </>
  )
}
