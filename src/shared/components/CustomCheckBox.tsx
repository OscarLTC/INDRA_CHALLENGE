import { Checkbox, type CheckboxChangeEvent } from 'primereact/checkbox'
import { FaCheck } from 'react-icons/fa6'

interface Props {
  label: string
  checked: boolean
  onChange: (e: CheckboxChangeEvent) => void
}

export const CustomCheckBox = ({ label, checked, onChange }: Props) => {
  return (
    <div className='flex gap-3 items-center z-20'>
      <Checkbox
        checked={checked}
        inputId={label}
        onChange={onChange}
        icon={<FaCheck className='text-white' />}
        className='justify-center items-center '
      />
      <label
        htmlFor={label}
        className='text-sm sm:text-xs leading-6 sm:leading-5 tracking-wide'
      >
        {label}
      </label>
    </div>
  )
}
