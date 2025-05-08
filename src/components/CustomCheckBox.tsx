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
    <div className='flex gap-3 items-center'>
      <Checkbox
        checked={selectedOption}
        inputId='privacy'
        onChange={(e) => setSelectedOption(e.checked!)}
        icon={<FaCheck className='text-white' />}
      />
      <label htmlFor='privacy' className='text-xs leading-5 tracking-[0.1px]'>
        {label}
      </label>
    </div>
  )
}
