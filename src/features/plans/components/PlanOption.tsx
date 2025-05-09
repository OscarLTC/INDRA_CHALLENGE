import { Button } from 'primereact/button'
import { LuCheck } from 'react-icons/lu'

export type PlanType = 'me' | 'someone'

type Option = {
  type: PlanType
  title: string
  description: string
  imgSrc: string
}

interface Props {
  option: Option
  selected: boolean
  onSelect: (type: PlanType) => void
}

export const PlanOption = ({ onSelect, selected, option }: Props) => {
  return (
    <Button
      unstyled
      onClick={() => onSelect(option.type)}
      className={`relative cursor-pointer px-6 py-10 bg-white border-3 rounded-3xl shadow-2xl/100 shadow-[#AEACF3] backdrop-blur-2xl flex items-center ${selected ? 'border-[#141938]' : 'border-transparent'}`}
    >
      <div
        className={`absolute top-4 right-4 w-6 h-6 rounded-full border  flex items-center justify-center ${
          selected
            ? 'border-transparent bg-[#389E0D]'
            : 'border-[#A9AFD9] bg-transparent'
        }`}
      >
        <LuCheck className={`text-white ${selected ? 'block ' : 'hidden'}`} />
      </div>

      <div className='flex flex-col gap-2 sm:gap-4  text-[#141938] sm:w-64'>
        <div className='flex flex-row sm:flex-col items-center gap-4'>
          <img
            src={option.imgSrc}
            alt={option.title}
            className='w-12 h-12 object-cover'
          />
          <h2 className=' font-bold text-2xl leading-8'>{option.title}</h2>
        </div>
        <p className='text-xs leading-5 tracking-wider text-start'>
          {option.description}
        </p>
      </div>
    </Button>
  )
}
