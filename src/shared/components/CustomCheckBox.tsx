import { Checkbox } from 'primereact/checkbox'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

interface Props {
  label: string
  checked: boolean
}

export const CustomCheckBox = ({ label }: Props) => {
  const [selectedOption, setSelectedOption] = useState(false)

  return (
    <div className='flex gap-3 items-center z-20'>
      <Checkbox
        checked={selectedOption}
        inputId='privacy'
        onChange={(e) => setSelectedOption(e.checked!)}
        icon={<FaCheck className='text-white' />}
        className='justify-center items-center '
      />
      <label
        htmlFor='privacy'
        className='text-sm sm:text-xs leading-6 sm:leading-5 tracking-wide'
      >
        {label}
      </label>
    </div>
  )
}
