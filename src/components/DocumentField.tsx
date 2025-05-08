import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'

const docTypes = [
  { label: 'DNI', value: 'dni' },
  { label: 'CE', value: 'carne' },
]

interface Props {
  type: string
  number: string
  onTypeChange: (value: string) => void
  onNumberChange: (value: string) => void
}

export const DocumentField = ({
  type,
  number,
  onTypeChange,
  onNumberChange,
}: Props) => {
  return (
    <div className='p-inputgroup border border-[#5E6488] divide-x divide-[#5E6488] rounded-lg'>
      <Dropdown
        value={type}
        options={docTypes}
        onChange={(e) => onTypeChange(e.value)}
        className='max-w-[140px] p-4 ring-0 outline-none'
        placeholder='Tipo'
      />
      <InputText
        value={number}
        onChange={(e) => onNumberChange(e.target.value)}
        placeholder='N° de documento'
        className='flex-1 p-4 ring-0 outline-none'
      />
    </div>
  )
}
