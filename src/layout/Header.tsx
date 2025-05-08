import { FaPhone } from 'react-icons/fa6'

export const Header = () => {
  return (
    <header className='flex justify-between items-center w-full max-w-[90rem] mx-auto px-4 py-3 bg-transparent'>
      <img src='/src/assets/img/header-logo.png' alt='' />
      <div className='flex gap-7 items-center'>
        <span className='font-semibold'>¡Compra por este medio!</span>
        <a
          href='tel:(01)4116001'
          className='flex items-center gap-4 text-sm md:text-base font-bold'
        >
          <FaPhone className='w-4 h-4' />
          (01) 411 6001
        </a>
      </div>
    </header>
  )
}
